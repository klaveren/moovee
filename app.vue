<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useMovieStore } from '~/stores/movie'
const movieStore = useMovieStore()
await movieStore.search()
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s,
    backdrop-filter 0.1s;
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(50px);
  backdrop-filter: blur(3px);
}

.slide-left-enter-to,
.slide-left-leave-from {
  opacity: 1;
  transform: translateX(0);
  backdrop-filter: blur(0);
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-50px);
  backdrop-filter: blur(3px);
}

.slide-right-enter-to,
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
  backdrop-filter: blur(0);
}
</style>
