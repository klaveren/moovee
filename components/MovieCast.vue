<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4 p-4 w-full"
  >
    <Card v-for="acting in actings" :key="acting.id">
      <NuxtImg
        :src="`https://image.tmdb.org/t/p/w200/${acting.profile_path}`"
        class="object-cover w-full"
        loading="lazy"
        format="webp"
        style="height: 175px"
      />
      <div class="p-4">
        <span>{{ acting.popularity }}</span>
        <h2 class="font-bold text-sm">{{ acting.name }}</h2>
        <h3 class="text-sm">{{ acting.character }}</h3>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMovieStore } from '~/stores/movie'
const { actings } = storeToRefs(useMovieStore())
</script>
