<script setup lang="ts">
import IconArrowRight from './icons/IconArrowRight.vue'

defineProps<{
  title: string
  date: string
  image: string
  className?: string
}>()
</script>

<template>
  <div :class="[className, 'border rounded-lg border-[#F1E8DB] h-full sm:h-[341px] bg-white']">
    <img
      :src="image"
      class="object-cover w-full h-[200px] sm:h-full max-h-[221px] rounded-t-lg bg-zinc-50"
      :alt="title"
    />

    <div class="flex flex-col items-start gap-2 p-4 sm:gap-4 text-start">
      <h2 class="text-sm font-medium sm:text-base text-gray wrap-title" v-html="title"></h2>
      <div
        class="flex flex-row justify-between w-full gap-2 text-xs sm:gap-4 sm:items-center lg:text-sm"
      >
        <span class="ml-1 underline text-gray-40">{{ date }}</span>
        <IconArrowRight />
      </div>
    </div>
  </div>
</template>
