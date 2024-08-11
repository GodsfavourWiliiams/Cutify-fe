<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import { computed } from 'vue'

const route = useRoute()
const isAuth = computed(() => route.path.startsWith('/auth/'))
</script>

<template>
  <Header v-if="!isAuth" />
  <Hero v-if="!isAuth" />
  <RouterView />
  <Footer v-if="!isAuth" />
</template>
