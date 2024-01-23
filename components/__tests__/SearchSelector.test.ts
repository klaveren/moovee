import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SearchSelector from '~/components/SearchSelector.vue'

describe('SearchSelector.vue', () => {
  it('creates the component', async () => {
    const wrapper = shallowMount(SearchSelector)

    // Assert that the component exists
    expect(wrapper.exists()).toBe(true)
  })
})
