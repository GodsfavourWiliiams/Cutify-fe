<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  width?: number | string
  height?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  width: 16,
  height: 20
})
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 16 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 11.25C9.65685 11.25 11 9.90685 11 8.25C11 6.59315 9.65685 5.25 8 5.25C6.34315 5.25 5 6.59315 5 8.25C5 9.90685 6.34315 11.25 8 11.25Z"
      fill="white"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.9999 11.25C11.7499 16.5 7.99994 22.5 7.99994 22.5C7.99994 22.5 4.24994 16.5 1.99994 11.25C-0.250061 6 3.49994 1.5 7.99994 1.5C12.4999 1.5 16.2499 6 13.9999 11.25Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
