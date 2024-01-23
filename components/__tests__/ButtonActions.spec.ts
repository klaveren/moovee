import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonActions from '~/components/ButtonActions.vue'

describe('Dropdown', () => {
  it('should render the dropdown menu closed by default', () => {
    const wrapper = mount(ButtonActions)
    expect(wrapper.find('.actions-menu').exists()).toBe(false)
  })

  it('should toggle the dropdown menu when the button is clicked', () => {
    const wrapper = mount(ButtonActions)
    wrapper.find('button').trigger('click')
    expect(wrapper.find('.absolute.right-0').exists()).toBe(true)
  })
})
