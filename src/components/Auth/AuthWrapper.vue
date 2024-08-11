<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface Props {
  class?: string
}

const props = defineProps<Props>()
const screenHeight = ref(window.innerHeight)

const containerClass = computed(() => {
  const alignmentClass = screenHeight.value <= 820 ? 'items-start' : 'items-center'
  return [
    'w-full flex justify-center p-4 py-10 md:py-20 overflow-y-auto',
    alignmentClass,
    props.class
  ]
    .filter(Boolean)
    .join(' ')
})

// Update the screenHeight when the window is resized
onMounted(() => {
  window.addEventListener('resize', () => {
    screenHeight.value = window.innerHeight
  })
})
</script>

<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>
