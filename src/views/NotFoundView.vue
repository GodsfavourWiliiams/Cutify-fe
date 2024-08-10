<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    class="absolute inset-0 flex flex-col items-center justify-center text-center top-20 h-80"
  >
    <h1 class="mb-4 text-3xl font-bold">404 Not Found</h1>
    <p class="mb-4 text-base">This page does not exist</p>
    <RouterLink to="/" class="p-4 mt-4 text-white rounded-lg bg-primary-50 hover:bg-primary-60"
      >Go Back</RouterLink
    >
  </section>
</template>
