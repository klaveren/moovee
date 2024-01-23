import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SortSelector from '~/components/SortSelector.vue'

describe('SearchSelector.vue', () => {
  it('creates the component', async () => {
    const wrapper = shallowMount(SortSelector)

    // Assert that the component exists
    expect(wrapper.exists()).toBe(true)
  })
})
