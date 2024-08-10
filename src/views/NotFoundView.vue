<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="flex flex-col items-center justify-center text-center h-96">
    <h1 class="mb-4 text-6xl font-bold">404 Not Found</h1>
    <p class="mb-5 text-xl">This page does not exist</p>
    <RouterLink to="/" class="p-4 mt-4 text-white rounded-lg bg-primary-50 hover:bg-primary-60"
      >Go Back</RouterLink
    >
  </section>
</template>
