import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '~/components/Card.vue'

describe('Card', () => {
  it('should render the Card component with the correct classes', () => {
    const wrapper = mount(Card)

    // Check if the component has the correct classes
    expect(wrapper.classes()).toContain('grid-movie-item')
    expect(wrapper.classes()).toContain('relative')
    expect(wrapper.classes()).toContain('bg-white')
    expect(wrapper.classes()).toContain('rounded-md')
    expect(wrapper.classes()).toContain('shadow-md')
    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('border-gray-300')
    expect(wrapper.classes()).toContain('overflow-hidden')
    expect(wrapper.classes()).toContain('w-full')

    // Check if the slot is present
    // expect(wrapper.find('slot[name="default"]').exists()).toBe(true)
  })
})
