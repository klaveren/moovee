import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Poster from '~/components/Poster.vue'

describe('Poster.vue', () => {
  it('creates the component', async () => {
    const wrapper = shallowMount(Poster)

    // Assert that the component exists
    expect(wrapper.exists()).toBe(true)
  })
})
