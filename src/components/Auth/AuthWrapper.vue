<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const containerClass = computed(() => {
  return ['w-full flex items-center justify-center p-4 pb-20 md:pb-0 overflow-y-auto', props.class]
    .filter(Boolean)
    .join(' ')
})
</script>

<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>
