<template>
  <div class="absolute top-0 right-0 inline-block text-left w-10 me-2 mt-2">
    <button
      @click="toggleDropdown"
      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-500 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      ...
    </button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 space-y-2 bg-white border border-gray-300 rounded-md shadow-md"
    >
      <button
        @click="selectOption('Option 1')"
        class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        Add Favorite
      </button>
      <button
        @click="selectOption('Option 2')"
        class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        Add Watched
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
const selectOption = (option) => {
  console.log(`Selected option: ${option}`)
  isOpen.value = false
}
</script>

<style scoped></style>
