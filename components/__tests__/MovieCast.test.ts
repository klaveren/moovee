import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MovieCast from '~/components/MovieCast.vue'

describe('MovieCast.vue', () => {
  it('creates the component', async () => {
    const wrapper = shallowMount(MovieCast)

    // Assert that the component exists
    expect(wrapper.exists()).toBe(true)
  })
})
