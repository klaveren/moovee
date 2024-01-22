<template>
  <div class="mt-4 bg-gray-200 shadow-md rounded-md border border-gray-300 p-4">
    <span class="text-lg font-semibold text-gray-700">Sort</span>
    <div class="mt-2">
      <label for="sortSelector" class="block text-sm font-medium text-gray-700">
        Sort Results By
      </label>
      <select
        id="sortSelector"
        v-model="selectedSort"
        class="h-full w-full rounded-md border-0 py-2 pl-2 pr-7 text-gray-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-md"
      >
        <option value="popularity-desc">Popularity Desc</option>
        <option value="popularity-asc">Popularity Asc</option>
        <option value="rating-desc">Rating Desc</option>
        <option value="rating-asc">Rating Asc</option>
        <option value="release-desc">Release Date Des</option>
        <option value="release-asc">Release Date Asc</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMovieStore } from '~/stores/movie'
const movieStore = useMovieStore()

const selectedSort = ref('popularity-desc')

watch(selectedSort, async (newSort, oldSort) => {
  switch (newSort) {
    case 'popularity-desc':
      await movieStore.search('/discover/movie', {
        sort_by: 'popularity.desc',
        language: 'en-US',
      })
      break
    case 'popularity-asc':
      await movieStore.search('/discover/movie', {
        sort_by: 'popularity.asc',
        language: 'en-US',
      })
      break
    case 'rating-desc':
      await movieStore.search('/discover/movie', {
        sort_by: 'vote_average.desc',
        language: 'en-US',
      })
      break
    case 'rating-asc':
      await movieStore.search('/discover/movie', {
        sort_by: 'vote_average.asc',
        language: 'en-US',
      })
      break
    case 'release-desc':
      await movieStore.search('/discover/movie', {
        sort_by: 'release_date.desc',
        language: 'en-US',
      })
      break
    case 'release-asc':
      await movieStore.search('/discover/movie', {
        sort_by: 'release_date.asc',
        language: 'en-US',
      })
      break
    case 'title-asc':
      await movieStore.search('/discover/movie', {
        sort_by: 'original_title.asc',
        language: 'en-US',
      })
      break
    case 'title-desc':
      await movieStore.search('/discover/movie', {
        sort_by: 'original_title.desc',
        language: 'en-US',
      })
      break
    default:
      await movieStore.search('/discover/movie', {
        sort_by: 'popularity.desc',
        language: 'en-US',
      })
  }
})
</script>

<style scoped></style>
