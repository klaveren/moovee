<template>
  <div class="mt-4 bg-gray-200 rounded-md shadow-md border border-gray-300 p-4">
    <span class="text-lg font-semibold text-gray-700">Filters</span>

    <!-- Release Dates options -->
    <div class="mt-4">
      <div class="mt-2">
        <label for="fromDate" class="block text-sm font-medium text-gray-700">
          From
        </label>
        <input
          type="date"
          id="fromDate"
          v-model="formData.fromDate"
          class="h-full w-full rounded-md border-0 py-2 pl-2 pr-7 text-gray-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-md"
        />
      </div>

      <div class="mt-2">
        <label for="toDate" class="block text-sm font-medium text-gray-700">
          To
        </label>
        <input
          type="date"
          id="toDate"
          v-model="formData.toDate"
          class="h-full w-full rounded-md border-0 py-2 pl-2 pr-7 text-gray-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-md"
        />
      </div>
    </div>

    <!-- Genres options -->
    <div class="mt-4">
      <label for="genres" class="block text-sm font-medium text-gray-700">
        Genres
      </label>
      <select
        id="genres"
        v-model="formData.selectedGenre"
        class="h-full w-full rounded-md border-0 py-2 pl-2 pr-7 text-gray-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-md"
      >
        <option v-for="genre in genres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>
    </div>

    <div class="mt-2">
      <label for="slider" class="block text-sm font-medium text-gray-700">
        User Score
      </label>
      <input
        type="range"
        id="slider"
        v-model="formData.selectedValue"
        min="1"
        max="10"
        class="mt-1 block w-full mt-1 block appearance-none bg-gray-300 h-2 rounded-full focus:outline-none focus:shadow-outline-indigo transition-all duration-300 ease-in-out"
      />
      <span class="mt-2 text-gray-700">
        Score: {{ formData.selectedValue }}
      </span>
    </div>
    <div class="mt-4">
      <button
        @click="submitFilters"
        class="bg-indigo-500 text-white py-2 px-4 rounded-md w-full"
      >
        Apply Filters
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useMovieStore } from '~/stores/movie'
const movieStore = useMovieStore()
const formData = reactive({
  // searchAllReleases: false,
  fromDate: '',
  toDate: '',
  selectedGenre: '',
  selectedValue: '',
})

const submitFilters = async () => {
  const searchParams = {
    language: 'en-US',
    'release_date.gte': formData.fromDate,
    'release_date.lte': formData.toDate,
    with_genres: formData.selectedGenre,
    'vote_average.gte': formData.selectedValue,
  }

  // Call the API or any other logic to apply filters
  await movieStore.search('/discover/movie', searchParams)
}

const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
]
</script>

<style scoped></style>
