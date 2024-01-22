// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module', // 'nuxt-lazy-load',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  css: ['@/assets/scss/main.scss'],
  imports: {
    dirs: [
      // Scan top-level modules
      'composables/**',
      'middleware/**',
      'stores/**',
      // "utils/**",
    ],
  },
  runtimeConfig: {
    public: {
      TMDP_API_KEY: process.env.TMDP_API_KEY,
      TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
      TMDB_BASE_URL: process.env.TMDB_BASE_URL,
    },
  },
})
