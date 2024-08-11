<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  size: 'default',
  asChild: false
})

const baseClass =
  'inline-flex items-center justify-center rounded-lg text-sm gap-2 font-medium ring-offset-background transition-colors outline-none disabled:pointer-events-none disabled:opacity-50'

const variantClasses = {
  default: 'bg-primary text-white hover:bg-primary/60',
  destructive: 'bg-red-500 text-white hover:bg-red-600/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-[#F1E9DB] text-gray-50 hover:bg-[#F1E9DB]/60',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline'
}

const sizeClasses = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3',
  lg: 'h-12 px-8',
  icon: 'h-10 w-10'
}

const computedClass = computed(() => {
  return `${baseClass} ${variantClasses[props.variant]} ${sizeClasses[props.size]}`
})
</script>

<template>
  <component :is="props.asChild ? 'slot' : 'button'" :class="computedClass">
    <slot></slot>
  </component>
</template>
