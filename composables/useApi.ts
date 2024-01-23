import { ref } from 'vue'
import { ofetch } from 'ofetch'

export interface IUseApi<T> {
  data: { value: T }
}

const MAX_RETRIES = 3
const RETRY_DELAY = 1000

export async function useApi<T>(
  url: string,
  searchParams?: { [key: string]: any }
): Promise<IUseApi<T>> {
  const config = useRuntimeConfig()

  const apiKey = config.public.TMDP_API_KEY
  const accessToken = config.public.TMDB_ACCESS_TOKEN
  const baseUrl = config.public.TMDB_BASE_URL || 'https://api.themoviedb.org/3'

  // Validate required config values
  if (!url) throw new Error("Request URL can't be null.")
  if (!apiKey) throw new Error('TMDP_API_KEY is not defined.')
  if (!accessToken) throw new Error('TMDB_ACCESS_TOKEN is not defined.')

  const urlSearchParams = new URLSearchParams(searchParams)

  for (let retryCount = 0; retryCount < MAX_RETRIES; retryCount++) {
    try {
      const response: T = await ofetch(
        `${baseUrl}${url}?${urlSearchParams.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: 'application/json',
          },
        }
      )

      console.log(
        `\x1B[32museApi request:`,
        `${baseUrl}${url}?${urlSearchParams.toString()}\x1B[0m`
      )

      return { data: ref(response) } as IUseApi<T>
    } catch (error: any) {
      console.error(
        '\n\x1B[31m',
        `useApi Error (${error.statusCode || 'unknown'}) at path ${url}.`,
        error,
        '\x1B[0m'
      )

      if (error.statusCode === 403) {
        throw new Error('Access forbidden. Please check your credentials.')
      } else if (error.statusCode === 404) {
        throw new Error('Page not found. Please provide a valid URL.')
      } else if (error.statusCode !== 408) {
        throw error.message // Rethrow for non-retryable errors
      }

      console.log(
        `Retrying due to 408 error... (retry ${retryCount + 1} of ${MAX_RETRIES})`
      )
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY))
    }
  }

  throw new Error(`Failed to fetch data after ${MAX_RETRIES} retries.`)
}
