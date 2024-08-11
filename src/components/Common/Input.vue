<script setup lang="ts">
import { computed, useSlots } from 'vue'

defineProps({
  className: {
    type: String,
    default: ''
  },
  error: {
    type: Boolean,
    default: false
  }
})

const startIconPadding = 'pl-4'
const endIconPadding = 'sm:pr-4'
const bothIconsPadding = 'pl-10 pr-10'

const combinedPadding = computed(() => {
  const hasStartContent = !!slots.startContent
  const hasEndContent = !!slots.endContent

  if (hasStartContent && hasEndContent) return bothIconsPadding
  if (hasStartContent) return startIconPadding
  if (hasEndContent) return endIconPadding
  return ''
})

const slots = useSlots();

// Define emit function to emit events
const emit = defineEmits(['update:modelValue'])

// Handle input event with proper typing
function handleInput(event: Event) {
  const input = event.target as HTMLInputElement
  emit('update:modelValue', input.value)
}
</script>

<template>
  <div
    :class="[
      'flex h-max w-full items-center rounded-lg border text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grayscale-500 focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-50',
      className,
      combinedPadding,
      {
        'border-red-600 bg-white focus-within:ring-destructive focus-visible:ring-red-500': error
      }
    ]"
  >
    <slot name="startContent"></slot>
    <input
      class="flex-grow w-full h-full px-5 py-4 rounded-xl focus-within:outline-none focus-within:ring-transparent"
      v-bind="$attrs"
      @input="handleInput"
    />
    <slot name="endContent"></slot>
  </div>
</template>
