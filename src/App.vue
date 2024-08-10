<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <HeaderComponent />
  <Hero />
  <RouterView />
  <Footer />
</template>
