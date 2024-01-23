import { describe, it, expect } from 'vitest'
import { useMovieStore } from '~/stores/movie'

describe('useMovieStore (with real API calls)', () => {
  it('should initialize with default state', () => {
    const store = useMovieStore()
    expect(store.movie).toBeNull()
    expect(store.movies).toStrictEqual([])
    expect(store.credits).toBeNull()
  })

  it('should set and get movies correctly', async () => {
    const store = useMovieStore()
    await store.search() // Use default URL and search params
    expect(store.movies).not.toBeNull()
    expect(store.movies.length).toBeGreaterThan(0) // Assuming API returns some movies
  })

  it('should set movie and credits when fetching one movie', async () => {
    const movieId = '955916' // Replace with a valid movie ID
    const store = useMovieStore()
    await store.fetchOne(movieId)

    expect(store.movie).not.toBeNull()
    expect(store.credits).not.toBeNull()
  })
})
