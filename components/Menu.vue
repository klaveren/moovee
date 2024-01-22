<template>
  <nav
    class="fixed top-0 w-full bg-gray-800 p-7 z-50 shadow-md transition-all duration-300"
  >
    <div class="container mx-auto flex justify-center items-center">
      <NuxtLink to="/" class="text-white me-4" activeClass="active-link">
        Movies
      </NuxtLink>
      <NuxtLink
        to="/watchlist"
        class="text-white me-4"
        activeClass="active-link"
      >
        Watched
      </NuxtLink>
      <NuxtLink
        to="/favorite"
        class="text-white me-4"
        activeClass="active-link"
      >
        Favorite
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup></script>
