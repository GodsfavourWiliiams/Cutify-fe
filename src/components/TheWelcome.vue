<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #heading>Documentation</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Tooling</template>
  </WelcomeItem>
</template>
