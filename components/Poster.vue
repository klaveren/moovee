<template>
  <span>
    <NuxtLink :to="`/movie/${movieId}`">
      <NuxtImg
        :src="src"
        :alt="alt"
        class="background-container rounded-lg w-full h-full object-cover"
        loading="lazy"
        format="webp"
      />
    </NuxtLink>
  </span>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt?: string
  movieId: number
}

withDefaults(defineProps<Props>(), {
  alt: '',
})
</script>

<style scoped>
.background-container {
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
