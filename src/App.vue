<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <Header />
  <Hero />
  <RouterView />
  <Footer />
</template>
