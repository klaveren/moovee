<template>
  <div class="grid">
    <div class="w-1/1">
      <MovieBanner />
    </div>
    <div class="movie-cast w-1/1">
      <h1 class="font-bold text-3xl">Top Billed Cast</h1>
      <MovieCast />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '~/stores/movie'
const route = useRoute()
const movieStore = useMovieStore()
movieStore.fetchOne(route.params.movieId as string)
</script>

<style scoped lang="scss">
.movie-cast {
  margin-top: 43vh;
  padding: 10px;
}
</style>
