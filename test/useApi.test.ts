import { describe, it, expect } from 'vitest'
import { useApi } from '~/composables/useApi'
import type { TMovie } from '~/core/types/TMovie'

describe('useApi (with real API calls)', () => {
  it('should throw an error when requesting without a URL', async () => {
    await expect(useApi<TMovie>('')).rejects.toThrow(
      "Request URL can't be null."
    )
  })

  it('should throw an error when requesting with an invalid URL', async () => {
    await expect(useApi<TMovie>('/movie')).rejects.toThrow(
      'Page not found. Please provide a valid URL.'
    )
  })

  it('should fetch data successfully when requesting with a valid URL', async () => {
    const { data } = await useApi<TMovie>('/movie/955916')

    expect(data.value.id).toBe(955916)
    expect(data.value.adult).toBe(false)
    expect(data.value.original_title).toBe('Lift')
    expect(data.value.original_language).toBe('en')
  })
})
