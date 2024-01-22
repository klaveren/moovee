<template>
  <Card>
    <div class="absolute inset-0 flex flex-col justify-end">
      <Poster :src="getMoviePoster(movie.id)" :movie-id="movie.id" />
      <ButtonActions />
      <div class="bg-white h-full w-full p-2">
        <NuxtLink
          class="text-lg font-semibold line-clamp-4"
          :to="`/movie/${movie.id}`"
        >
          ({{ movie.vote_average }}) - {{ movie?.title }}
        </NuxtLink>
        <span>{{ movie?.release_date }}</span>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { type TMoviesList } from '@/core/types/TMoviesList'

interface Props {
  movie: TMoviesList
}

withDefaults(defineProps<Props>(), {})

import { storeToRefs } from 'pinia'
import { useMovieStore } from '~/stores/movie'
const { getMoviePoster } = storeToRefs(useMovieStore())
</script>

<style lang="scss" scoped>
.grid-movie-item {
  height: 450px;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    cursor: pointer;
    padding: 0.5rem;
    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
