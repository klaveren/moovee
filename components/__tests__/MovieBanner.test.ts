import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MovieBanner from '~/components/MovieBanner.vue'

describe('MovieBanner.vue', () => {
  it('creates the component', async () => {
    const wrapper = shallowMount(MovieBanner)

    // Assert that the component exists
    expect(wrapper.exists()).toBe(true)
  })
})
