<script setup lang="ts">
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconX from './icons/IconX.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import { RouterLink } from 'vue-router'
import AppContainer from './AppContainer.vue'

const date = new Date().getFullYear()

interface FooterItem {
  title?: string
  links: { text: string; href: string }[]
}

const footerItems: FooterItem[] = [
  {
    title: 'Quick Links',
    links: [
      { text: 'Services', href: '#' },
      { text: 'Testimonials', href: '#' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contact Us', href: 'contact-us' }
    ]
  },
  {
    title: 'Our categories',
    links: [
      { text: 'Hair salon', href: '#' },
      { text: 'Barbing shops', href: '#' },
      { text: 'Spa', href: '#' },
      { text: 'Gym center', href: '#' }
    ]
  },
  {
    links: [
      { text: 'Hair salon', href: '#' },
      { text: 'Barbing shops', href: '#' },
      { text: 'Spa', href: '#' },
      { text: 'Gym center', href: '#' }
    ]
  }
]

const socialIcons = [
  { component: IconFacebook, href: '#' },
  { component: IconInstagram, href: '#' },
  { component: IconX, href: '#' },
  { component: IconLinkedin, href: '#' }
]
</script>

<template>
  <footer id="footer" class="relative mt-10 bg-primary-60">
    <div class="py-16 border-b border-gray-10">
      <AppContainer
        class="text-white grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <div class="flex flex-col col-span-4 gap-6 mb-10 lg:col-span-1 lg:mb-0">
          <RouterLink to="/" class="flex items-center flex-shrink-0">
            <img class="w-auto h-[95px]" src="/src/assets/cutify-logo.png" alt="Cutify" />
          </RouterLink>
          <p class="whitespace-nowrap text-[13px]">...book beauty & health services</p>
        </div>

        <template v-for="(item, index) in footerItems" :key="index">
          <div
            :class="[
              index === 0 ? 'col-span-4' : 'col-span-1',
              'space-y-6 text-sm text-left sm:col-span-2 lg:mx-auto lg:col-span-1'
            ]"
          >
            <h4 v-if="item.title" class="font-medium underline">{{ item.title }}</h4>
            <ul :class="[!item.title ? 'mt-11' : 'mt-0']">
              <li v-for="link in item.links" :key="link.text" class="mb-6">
                <a :href="link.href" class="whitespace-nowrap">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </template>

        <div class="flex flex-col w-full col-span-3 gap-8 mt-10 lg:mt-0 sm:col-span-1">
          <div class="flex items-center gap-4">
            <h1 class="font-medium whitespace-nowrap">Follow us</h1>
            <div class="flex items-center gap-4">
              <a v-for="icon in socialIcons" :key="icon.href" :href="icon.href">
                <component :is="icon.component" />
              </a>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <h3 class="text-xs text-left sm:text-sm whitespace-nowrap">
              Subscribe to our newsletter to get updates from us.
            </h3>
            <div class="flex items-center justify-between w-full">
              <input
                type="text"
                name="email"
                class="flex-1 w-[279px] text-sm px-6 py-3 focus:outline-none"
                placeholder="Enter your email"
              />
              <button type="submit" class="py-3 text-sm text-white px-7 bg-primary-50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
    <div class="flex flex-col items-center justify-center py-6">
      <p class="text-xs leading-none text-white lg:text-sm">
        Copyright © {{ date }} Genleaders All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
