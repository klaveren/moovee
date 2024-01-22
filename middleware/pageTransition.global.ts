import { defineNuxtRouteMiddleware } from '#imports'

export default defineNuxtRouteMiddleware((to, from) => {
  const transitions: { [key: string]: string } = {
    '/': 'slide-left',
    '/favorite': 'slide-right',
    '/watchlist': from?.path === '/favorite' ? 'slide-left' : 'slide-right',
  }

  to.meta = {
    pageTransition: {
      name: transitions[to.path] || 'slide-right',
    },
  }
})
