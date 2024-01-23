import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import GridMovieItem from '~/components/GridMovieItem.vue'
import Card from '~/components/Card.vue'
import Poster from '~/components/Poster.vue'
import ButtonActions from '~/components/ButtonActions.vue'
import type { TMoviesList } from '~/core/types/TMoviesList'

describe('GridMovieItem', () => {
  it('should render the GridMovieItem component with the correct structure', () => {
    // Mock movie data for testing
    const movie: TMoviesList = {
      adult: false,
      backdrop_path: '/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg',
      genre_ids: [],
      id: 955916,
      original_language: 'en',
      original_title: 'Lift',
      overview:
        'An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.',
      popularity: 1745.578,
      poster_path: '/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg',
      release_date: '2024-01-10',
      title: 'Lift',
      video: false,
      vote_average: 6.4,
      vote_count: 433,
    }

    // Mount the component with the mock movie data
    const wrapper = mount(GridMovieItem, {
      props: {
        movie,
      },
    })

    // Check if the component has the correct classes
    expect(wrapper.classes()).toContain('grid-movie-item')

    // Check if the content is present
    expect(wrapper.text()).toContain(movie.release_date)

    // Check if child components are present
    expect(wrapper.findComponent(Card).exists()).toBe(true)
    expect(wrapper.findComponent(Poster).exists()).toBe(true)
    expect(wrapper.findComponent(ButtonActions).exists()).toBe(true)
  })
})
