<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  width?: number | string
  height?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  width: 22,
  height: 22
})
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 18C12.275 17.9996 13.9988 17.4054 15.397 16.312L19.793 20.708L21.207 19.294L16.811 14.898C17.905 13.4997 18.4996 11.7754 18.5 10C18.5 5.589 14.911 2 10.5 2C6.089 2 2.5 5.589 2.5 10C2.5 14.411 6.089 18 10.5 18ZM10.5 4C13.809 4 16.5 6.691 16.5 10C16.5 13.309 13.809 16 10.5 16C7.191 16 4.5 13.309 4.5 10C4.5 6.691 7.191 4 10.5 4Z"
      fill="#6B6C6F"
    />
  </svg>
</template>
