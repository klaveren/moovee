import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import GridMovies from '~/components/GridMovies.vue'

describe('GridMovies.vue', () => {
  it('creates the component', async () => {
    const wrapper = shallowMount(GridMovies)

    // Assert that the component exists
    expect(wrapper.exists()).toBe(true)
  })
})
