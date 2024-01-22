<template>
  <div v-if="!!movie" class="banner p-1">
    <div class="container banner-content align-items-center justify-center">
      <div class="banner-image flex-4 p-5">
        <Poster
          :src="getMoviePoster(movie.id)"
          :alt="movie.title"
          :movie-id="movie.id"
        />
      </div>

      <div
        class="banner-details flex-6 relative"
        :style="{ backgroundImage: `url('${getMovieBackdrop(movie.id)}')` }"
      >
        <!-- Overlay-->
        <div
          class="absolute inset-0"
          :style="{
            backgroundImage: `linear-gradient(to left, transparent, #1a1a1a ${overlayPosition}%)`,
          }"
        ></div>

        <div class="labels text-white p-5">
          <div class="title">
            <h2 class="text-5xl font-bold">
              {{ movie.title }} ({{ movie.release_date.split('-')[0] }})
            </h2>
          </div>

          <div class="mb-4 text-white font-bold">
            <span class="mr-2">
              {{ movie.original_language.toUpperCase() }}&nbsp;&nbsp;|
            </span>
            <span class="mr-2">{{ movie.release_date }} &nbsp;&nbsp;| </span>
            <span class="mr-2">
              {{ movie.genres.map((genre) => genre.name).join(' - ') }}
              &nbsp;&nbsp;|
            </span>
            <span>
              {{ `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` }}
            </span>
          </div>

          <div class="section mb-4">
            <h2 class="text-2xl font-bold">{{ movie.tagline }}</h2>
          </div>

          <div class="section pb-10" :style="{ width: '45vw' }">
            <h3 class="text-lg font-bold mb-2">Overview</h3>
            <p class="text-sm">
              {{ movie.overview }}
            </p>
          </div>

          <div class="flex w-full">
            <div class="w-1/2 text-center w-full">
              <div
                v-for="director of credits?.crew.filter(
                  (item) => item.job === 'Director'
                )"
                :key="director.id"
              >
                <h3 class="text-lg font-bold">{{ director.name }}</h3>
              </div>
              <h3>Director</h3>
            </div>

            <div class="w-1/2 text-center w-full">
              <div
                v-for="writer of credits?.crew.filter(
                  (item) => item.job === 'Writer'
                )"
                :key="writer.id"
                :style="{ width: '100%' }"
              >
                <h3 class="text-lg font-bold">{{ writer.name }}</h3>
              </div>
              <h3>Writer(s)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMovieStore } from '~/stores/movie'

const overlayPosition = ref(100)
const { movie, credits, getMoviePoster, getMovieBackdrop } =
  storeToRefs(useMovieStore())
</script>

<style scoped lang="scss">
.banner {
  z-index: 1;
  width: 100vw;
  height: 42vh;
  left: 0;
  background: #1a1a1a;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.banner-content {
  display: flex;
  height: 100%;
  transform: perspective(1000px) translateZ(0px) scale(1, 1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
}
.labels {
  width: 100%;
  right: 0;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
