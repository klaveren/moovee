export type TResponseList<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type TResponseError = {
  statusCode: number
  statusMessage: number
  fatal: boolean
  unhandled: boolean
  data: {
    success: boolean
    status_code: number
    status_message: string
  }
}
