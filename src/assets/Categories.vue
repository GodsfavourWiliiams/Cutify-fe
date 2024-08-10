<script setup lang="ts">
import { ref } from 'vue'
import AppContainer from './AppContainer.vue'
import Button from './Button.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconLocation from './icons/IconLocation.vue'
import IconSearch from './icons/IconSearch.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

const images = ref([
  { src: '/src/assets/category-two.png', title: 'Beautiful Sunset' },
  { src: '/src/assets/category-three.png', title: 'Mountain Landscape' },
  { src: '/src/assets/category-one.png', title: 'Ocean Waves' },
  { src: '/src/assets/category-four.png', title: 'City Skyline' },
  { src: '/src/assets/category-one.png', title: 'Forest Trail' },
  { src: '/src/assets/category-two.png', title: 'Desert Sands' },
  { src: '/src/assets/category-three.png', title: 'Snowy Peaks' },
  { src: '/src/assets/category-four.png', title: 'Tropical Beach' }
])

const scrollContainer = ref<HTMLElement | null>(null)

const scroll = (direction: 'next' | 'prev') => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.clientWidth
    scrollContainer.value.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="bg-primary-60">
    <AppContainer>
      <div class="flex flex-col items-center justify-center gap-5 py-10 sm:py-28">
        <h1 class="text-xl font-medium text-center text-white sm:text-[32px]">
          Find beauty and wellness services near you
        </h1>
        <div class="flex items-center justify-center gap-4 mt-10 text-sm">
          <div
            class="flex items-center flex-1 divide-x divide-gray-200 max-w-[864px] w-full mx-auto bg-white rounded-lg h-[56px]"
          >
            <!-- Location dropdown -->
            <div class="flex items-center gap-2 px-4 py-2">
              <div class="flex items-center gap-3">
                <IconLocation />
                <span class="text-gray-30">Location: </span>
              </div>
              <select class="p-4 bg-transparent appearance-none focus:outline-none">
                <option>All</option>
                <option>Lagos</option>
                <option>Uyo</option>
              </select>
              <IconArrowDown />
            </div>

            <!-- Date dropdown -->
            <div class="flex items-center gap-2 px-4 py-2">
              <div class="flex items-center gap-3">
                <IconCalendar />
                <span class="text-gray-30">Date: </span>
              </div>
              <select class="bg-transparent appearance-none focus:outline-none">
                <option>Any day</option>
              </select>
              <IconArrowDown />
            </div>

            <!-- Search input -->
            <div class="flex items-center w-full gap-2 px-4 py-3">
              <IconSearch />
              <input
                type="text"
                placeholder="Search for service. E.g Braids"
                class="w-full px-4 py-1 lg:w-96 focus:outline-none placeholder:text-gray-30"
              />
            </div>
          </div>
          <!-- Search button -->
          <Button class="p-7" size="lg"> Search </Button>
        </div>
        <div class="flex items-center gap-4">
          <Button variant="secondary" size="lg"><IconSearch /> Hair salon</Button>
          <Button variant="secondary" size="lg"><IconSearch /> Knotless braids</Button>
          <Button variant="secondary" size="lg"><IconSearch /> Hair treatment</Button>
        </div>
      </div>
    </AppContainer>
    <!-- Categories -->
    <div class="relative flex flex-col h-full gap-5 mt-10">
      <div class="flex items-center justify-between gap-4">
        <h1 class="text-white">Catagories</h1>
        <div class="flex items-center gap-4">
          <Button @click="scroll('prev')" class="w-6 h-6 bg-white bg-opacity-50 rounded-full">
            <IconArrowLeft />
          </Button>
          <Button @click="scroll('next')" class="w-6 h-6 bg-white bg-opacity-50 rounded-full">
            <IconArrowLeft />
          </Button>
        </div>
      </div>
      <div ref="scrollContainer" class="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <!-- <div class="shrink-0 snap-center sm:w-2" /> -->
        <div v-for="(image, index) in images" :key="index" class="h-full">
          <img
            :src="image.src"
            :title="'Image' + (index + 1)"
            :alt="'Image' + (index + 1)"
            class="object-cover w-[320px] h-[170px] rounded-lg"
          />

          <h1 class="text-sm text-center text-white">{{ image.title }}</h1>
        </div>
        <div class="shrink-0 snap-center sm:w-2" />
      </div>
    </div>
  </div>
</template>
