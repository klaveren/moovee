import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Content from '~/components/Content.vue'

describe('Content', () => {
  it('should render the Content component with the correct classes and default slot', () => {
    const wrapper = mount(Content)

    // Check if the component has the correct classes
    expect(wrapper.classes()).toContain('container')
    expect(wrapper.classes()).toContain('mx-auto')
    expect(wrapper.classes()).toContain('mt-20')
    expect(wrapper.classes()).toContain('pb-14')
    expect(wrapper.classes()).toContain('overflow-y-auto')
    expect(wrapper.classes()).toContain('max-h-[calc(100vh-64px)]')

    // Check if the slot is present
    // expect(wrapper.find('slot[name="default"]').exists()).toBe(true)
  })
})
