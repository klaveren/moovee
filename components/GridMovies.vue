<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full"
  >
    <GridMovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMovieStore } from '~/stores/movie'
const { movies } = storeToRefs(useMovieStore())
</script>

<style scoped></style>
