<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const containerClass = computed(() => {
  return ['app-container', props.class].filter(Boolean).join(' ')
})
</script>

<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>
