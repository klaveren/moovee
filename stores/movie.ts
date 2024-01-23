import { defineStore } from 'pinia'
import type { TMovie } from '~/core/types/TMovie'
import type { TMovieCredits } from '~/core/types/TMovieCredits'
import type { TMoviesList } from '~/core/types/TMoviesList'
import type { TResponseList } from '~/core/types/TResponses'

interface State {
  movie: TMovie | null
  movies: TMoviesList[]
  credits: TMovieCredits | null
}

export const useMovieStore = defineStore('movie', {
  state: (): State => ({
    movie: null,
    movies: [],
    credits: null,
  }),
  getters: {
    /**
     * Return a list of actings with profile image
     */
    actings: (state) =>
      state.credits?.cast
        .filter(
          (item) => item.known_for_department === 'Acting' && item.profile_path
        )
        .sort((a, b) => b.popularity - a.popularity),
    /**
     * Select a full POSTER_PATH_URL from movieId
     * @param {movieId} - movie id
     */
    getMoviePoster: (state) => (movieId: number) => {
      const poster =
        state.movies?.find((movie) => movie.id === movieId)?.poster_path ||
        state.movie?.poster_path
      return `https://image.tmdb.org/t/p/w500/${poster}`
    },
    /**
     * Select a full BACKDROP_PATH_URL from movieId
     * @param {movieId} - movie id
     **/
    getMovieBackdrop: (state) => (movieId: number) => {
      const backdrop =
        state.movies?.find((film) => film.id === movieId)?.backdrop_path ||
        state.movie?.backdrop_path
      return `https://image.tmdb.org/t/p/w500/${backdrop}`
    },
  },
  actions: {
    /**
     * find an list of movies by searchParams
     * @param {url} - url to find
     * @param {searchParams} - search params
     **/
    async search(
      url: string = '/discover/movie',
      searchParams?: { [key: string]: any }
    ) {
      this.movies = []
      const [{ data: dataFilms }] = await Promise.all([
        useApi<TResponseList<TMoviesList>>(
          url || '/movie/popular',
          searchParams || {
            language: 'en-US',
            page: 1,
          }
        ),
      ])

      this.movies = dataFilms.value.results
    },
    /**
     * Get an movie by movieId
     * @param {movieId} - movie id
     **/
    async fetchOne(movieId: string, searchParams?: { [key: string]: any }) {
      const [{ data: movieData }, { data: creditsData }] = await Promise.all([
        useApi<TMovie>(
          `/movie/${movieId}`,
          searchParams || {
            language: 'en-US',
          }
        ),
        useApi<TMovieCredits>(`/movie/${movieId}/credits`, {
          language: 'en-US',
        }),
      ])

      this.movie = movieData.value
      this.credits = creditsData.value
    },
  },
})
