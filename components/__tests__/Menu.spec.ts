import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Menu from '~/components/Menu.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

describe('Menu.vue', () => {
  it('renders menu links correctly', async () => {
    // Create a Vue Router instance
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', name: 'home' },
        { path: '/watchlist', name: 'watchlist' },
        { path: '/favorite', name: 'favorite' },
      ] as any,
    })

    // Mount the Menu component with the router
    const wrapper = mount(Menu, {
      global: {
        plugins: [router],
      },
    })

    // Wait for the router to navigate to the default route ('/')
    await router.push('/')
    await router.isReady()

    // Check if the 'Movies' link has the 'active-link' class when on the home route
    expect(wrapper.find('.active-link').text()).toBe('Movies')

    // Navigate to the '/watchlist' route
    await router.push('/watchlist')
    await router.isReady()

    // Check if the 'Watched' link has the 'active-link' class when on the '/watchlist' route
    expect(wrapper.find('.active-link').text()).toBe('Watched')

    // Navigate to the '/favorite' route
    await router.push('/favorite')
    await router.isReady()

    // Check if the 'Favorite' link has the 'active-link' class when on the '/favorite' route
    expect(wrapper.find('.active-link').text()).toBe('Favorite')
  })
})
