<template>
  <div>
    <div class="p-4">
      <h1 class="text-4xl font-bold">Movies</h1>
      <p class="mt-4">
        Welcome, make yourselves at home. But remember, you're not
      </p>
    </div>
    <div class="flex">
      <div class="w-3/10 p-4">
        <SortSelector />
        <SearchSelector />
      </div>
      <div class="w-7/10 p-4 w-full">
        <GridMovies />
      </div>
    </div>
  </div>
</template>
