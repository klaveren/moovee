import { ref } from 'vue'

import type { TResponseError } from '~/core/types/TResponses'

export interface IuseApi<T> {
  data: { value: T }
  pending: any
  error: { value: TResponseError }
  refresh: any
}

const MAX_RETRIES = 3 // Set the maximum number of retries
const RETRY_DELAY = 1000 // Set the delay (in milliseconds) before each retry

export async function useApi<T>(
  url: string,
  searchParams?: { [key: string]: any }
): Promise<IuseApi<T>> {
  const config = useRuntimeConfig()
  const apiKey = config.public.TMDP_API_KEY
  const accessToken = config.public.TMDB_ACCESS_TOKEN
  const baseUrl = config.public.TMDB_BASE_URL || 'https://api.themoviedb.org/3'

  if (!url) throw new Error("Request URL can't be null.")
  if (!apiKey) throw new Error('TMDP_API_KEY is not defined.')
  if (!accessToken) throw new Error('TMDB_ACCESS_TOKEN is not defined.')

  const urlSearchParams = new URLSearchParams(searchParams)
  let retryCount = 0
  return fetchData()

  async function fetchData() {
    const authOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
      },
    }

    const { data, pending, error, refresh } = await useFetch(
      `${baseUrl}${url}?${urlSearchParams.toString()}`,
      authOptions
    )

    if (error.value) {
      console.log(
        '\n\x1B[31m',
        `useApi Error (${error.value.statusCode}) at path ${url}.`,
        '\x1B[0m',
        error.value.data
      )

      if (error.value.statusCode === 403) {
        throw new Error('Access forbidden. Please check your credentials.')
      }

      // Retry logic
      if (retryCount < MAX_RETRIES) {
        console.log(`Retrying fetchData in ${RETRY_DELAY / 1000} seconds...`)
        retryCount++
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY))
        return fetchData()
      }

      return {
        data: null as any,
        pending: ref(pending),
        error: ref(error.value as any),
        refresh,
      }
    }

    return {
      data: ref(data.value as any),
      pending,
      error: ref(error.value as any),
      refresh,
    }
  }
}
