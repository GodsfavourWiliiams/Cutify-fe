<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppContainer from './AppContainer.vue'
import BlogCard from './BlogCard.vue'
import BlogCardSkeleton from './BlogCardSkeleton.vue'
import type { IBlog } from '@/interface'

const blogs = ref<IBlog[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)

async function fetchBlogs() {
  isLoading.value = true
  error.value = null
  try {
    const response = await fetch('https://tespire.tech/wp-json/wp/v2/posts?categories=36')
    if (!response.ok) throw new Error('Failed to fetch blogs')
    const data = await response.json()
    blogs.value = data
  } catch (err) {
    console.error('Error fetching blogs:', err)
    error.value = err instanceof Error ? err.message : 'An unexpected error occurred'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchBlogs)

function formatDateToRelative(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ]

  if (diff < 1000) {
    return 'just now'
  }

  const seconds = Math.floor(diff / 1000)

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i]
    const count = Math.floor(seconds / interval.seconds)

    if (count > 0) {
      if (count === 1) {
        return `1 ${interval.label} ago`
      } else {
        return `${count} ${interval.label}s ago`
      }
    }
  }

  return 'just now' // fallback
}
</script>

<template>
  <AppContainer>
    <div class="flex flex-col gap-8 py-10 md:py-20">
      <div class="flex flex-col items-center gap-4 max-w-[656px] mx-auto w-full text-center">
        <h2 class="text-xl sm:text-3xl leading-[40px] font-semibold text-gray">
          Our Blog: Your Beauty and Wellness Guide
        </h2>
        <p class="leading-[32px] text-sm sm:text-base text-gray-50">
          Explore our weekly tips for maintaining gorgeous hair and managing your facial glow. We're
          here to help you master the art of self-care.
        </p>
      </div>

      <div v-if="error" class="text-center text-red-500">
        {{ error }}
        <button @click="fetchBlogs" class="ml-2 underline">Try again</button>
      </div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <template v-if="isLoading">
          <BlogCardSkeleton v-for="i in 4" :key="i" />
        </template>
        <template v-else>
          <BlogCard
            v-for="(blog, index) in blogs"
            :key="index"
            :title="blog.title.rendered"
            :date="formatDateToRelative(blog.date)"
            :image="blog?.jetpack_featured_media_url"
          />
        </template>
      </div>
    </div>
  </AppContainer>
</template>
