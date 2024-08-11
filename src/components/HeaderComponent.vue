<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppContainer from './AppContainer.vue'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact us', href: '/contact-us' }
]

const isActiveLink = (routePath: string) => {
  const route = useRoute()
  return route.path === routePath
}

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-white">
    <AppContainer>
      <div class="relative flex items-center justify-between h-[100px] overflow-hidden">
        <!-- Logo and navigation -->
        <RouterLink to="/" class="flex items-center flex-shrink-0">
          <img class="w-auto h-[60px]" src="/src/assets/images/cutify-logo.png" alt="Cutify" />
        </RouterLink>

        <!-- Mobile menu button -->
        <div class="flex items-center lg:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="relative inline-flex items-center justify-center p-2"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              width="24"
              height="25"
              v-if="!mobileMenuOpen"
              class="block w-6 h-6"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6.98477H20V8.98477H4V6.98477ZM4 11.9848H20V13.9848H4V11.9848ZM4 16.9848H20V18.9848H4V16.9848Z"
                fill="black"
              />
            </svg>
            <svg
              v-else
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Large screen menu button -->
        <div class="items-center hidden gap-4 lg:flex">
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
            <RouterLink
              to="/register"
              class="relative px-4 py-3 bg-white border rounded-lg text-primary-60 border-primary-60"
            >
              Create account
            </RouterLink>
            <RouterLink
              to="/login"
              class="relative w-[84px] p-3 text-white rounded-lg bg-primary-60 text-center"
            >
              Login
            </RouterLink>
          </div>
        </div>
      </div>
    </AppContainer>

    <!-- Mobile menu -->
    <div
      :class="[
        mobileMenuOpen ? 'right-6 absolute' : '-right-96 fixed',
        'transition-all ease-in-out duration-300 lg:hidden z-30 p-4 space-y-1 bg-white border rounded-lg shadow-sm top-28'
      ]"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.href"
        :class="[
          isActiveLink(item.href) ? 'text-primary-50 underline underline-offset-4' : 'text-gray',
          'block rounded-md px-3 py-2 text-sm'
        ]"
        :aria-current="isActiveLink(item.href) ? 'page' : undefined"
        >{{ item.name }}</RouterLink
      >
    </div>
  </nav>
</template>
