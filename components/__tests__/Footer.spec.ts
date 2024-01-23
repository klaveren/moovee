import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '~/components/Footer.vue'

describe('Footer', () => {
  it('should render the Footer component with the correct classes and content', () => {
    const wrapper = mount(Footer)

    // Check if the component has the correct classes
    expect(wrapper.classes()).toContain('fixed')
    expect(wrapper.classes()).toContain('bottom-0')
    expect(wrapper.classes()).toContain('w-full')
    expect(wrapper.classes()).toContain('bg-gray-800')
    expect(wrapper.classes()).toContain('p-4')
    expect(wrapper.classes()).toContain('z-50')

    // Check if the content is present
    const content = '© 2024 Moovee. Todos os direitos reservados.'
    expect(wrapper.text()).toContain(content)
  })
})
