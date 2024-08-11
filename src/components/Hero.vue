<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconX from './icons/IconX.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import AppContainer from './AppContainer.vue'
import BlogBg from '@/assets/images/blog-bg.png'
import ContactBg from '@/assets/images/contact-bg.png'
import Button from './Button.vue'

const route = useRoute()

const isHomePage = computed(() => route.path === '/')
const isContactPage = computed(() => route.path === '/contact-us')

const pageContent = computed(() => {
  switch (route.path) {
    case '/':
      return {
        title: '',
        bgImage: ''
      }
    case '/blog':
      return {
        title: 'Blog',
        bgImage: BlogBg
      }
    case '/contact-us':
      return {
        title: 'Contact Us',
        bgImage: ContactBg
      }
    default:
      return {
        title: '',
        bgImage: ''
      }
  }
})
</script>

<template>
  <div v-if="isHomePage" class="bg-[#F8FCFE] relative">
    <AppContainer class="px-4 py-24 sm:py-36">
      <div class="max-w-[868px] mx-auto text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 class="text-3xl font-medium sm:text-5xl text-gray leading-[160%] sm:leading-normal">
          <span class="font-bold text-primary-60">Discover and book</span> for a beauty and wellness
          services near you.
        </h1>
        <p class="text-sm sm:text-base lg:text-lg text-gray-50 leading-[300%] sm:leading-normal">
          Embrace self-care and indulge in a world of beauty and wellness. Explore our curated
          selection of services and effortlessly book appointments right in your neighborhood..
        </p>
        <Button size="lg"> Search and book an appointment </Button>
      </div>
      <div class="w-full mt-10 lg:-mt-20" aria-hidden="true">
        <img src="/src/assets/images/hero-bottom.png" alt="bottom-image" class="w-full" />
      </div>
    </AppContainer>
    <div class="absolute top-0 left-0 hidden sm:block" aria-hidden="true">
      <img src="/src/assets/images/hero-bg-left.png" alt="top-left-background" />
    </div>
    <div class="absolute top-0 right-0 hidden sm:block" aria-hidden="true">
      <img src="/src/assets/images/hero-bg-right.png" alt="top-right-background" />
    </div>
    <div class="block sm:hidden" aria-hidden="true">
      <img
        src="/src/assets/images/hero-top-right.png"
        alt="top-right-background"
        class="absolute top-0 right-6"
      />
      <img
        src="/src/assets/images/hero-top-left.png"
        alt="top-left-background"
        class="absolute top-0 left-6"
      />
      <img
        src="/src/assets/images/hero-bottom-left.png"
        alt="bottom-left-background"
        class="absolute bottom-[50%] left-0"
      />
      <img
        src="/src/assets/images/hero-bottom-right.png"
        alt="bottom-right-background"
        class="absolute bottom-[50%] right-0"
      />
    </div>
  </div>
  <div
    v-else
    class="relative w-full h-[252px] flex items-center justify-start bg-cover bg-center z-10"
    :style="{ backgroundImage: `url(${pageContent.bgImage})` }"
  >
    <AppContainer class="space-y-10">
      <div class="flex items-center gap-4 mt-14">
        <hr class="h-[1.5px] bg-white w-[72px]" />
        <h1 class="text-base font-medium text-white">
          {{ pageContent.title }}
        </h1>
      </div>
      <div v-if="isContactPage" class="items-center hidden gap-4 lg:flex">
        <IconFacebook />
        <IconInstagram />
        <IconX />
        <IconLinkedin />
      </div>
    </AppContainer>
  </div>
</template>
