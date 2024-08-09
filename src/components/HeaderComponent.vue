<script setup lang="ts">

import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#'},
  { name: 'Testimonials', href: '#'},
  { name: 'Blog', href: '/blog'},
  { name: 'Contact us', href: '/contact-us'},
]

const isActiveLink = (routePath: string) => {
  const route = useRoute();
  return route.path === routePath
}

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

</script>

<template>
  <nav class="bg-white">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-[100px]">   
        <!-- Logo and navigation -->
        <RouterLink to="/" class="flex items-center flex-shrink-0">
          <img class="w-auto h-[60px]" src="/src/assets/cutify-logo.png" alt="Cutify" />
        </RouterLink>
        
        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button @click="toggleMobileMenu" type="button" class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!mobileMenuOpen" class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Large screen menu button -->
        <div class="items-center hidden gap-4 sm:ml-6 sm:flex">
          <div class="flex space-x-4">
            <RouterLink 
              v-for="item in navItems" 
              :key="item.name" 
              :to="item.href" 
              :class="[
                isActiveLink(item.href) 
                  ? 'text-primary-50 font-medium underline decoration-primary-50' 
                  : 'text-gray decoration-text-gray hover:underline',
                'px-3', 
                'py-2', 
                'sm:text-sm', 
                'text-base', 
                'underline-offset-4'
              ]" 
              :aria-current="isActiveLink(item.href) ? 'page' : undefined"
            >
              {{ item.name }}
            </RouterLink>
            </div>
          <!-- Auth buttons -->
          <div class="flex items-center gap-4">
            <button type="button" class="relative px-4 py-3 bg-white border rounded-lg text-primary-60 border-primary-60">
              Create account
            </button>
            <button type="button" class="relative w-[84px] p-3 text-white rounded-lg bg-primary-60 focus:outline-none">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink v-for="item in navItems" :key="item.name" :to="item.href" :class="[isActiveLink(item.href) ? 'text-primary-50' : 'text-gray', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="isActiveLink(item.href) ? 'page' : undefined">{{ item.name }}</RouterLink>
      </div>
    </div>
  </nav>
</template>
