<script setup lang="ts">
import { ref } from 'vue'
import AppContainer from './AppContainer.vue'
import Button from './Button.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconLocation from './icons/IconLocation.vue'
import IconSearch from './icons/IconSearch.vue'
import IconArrowLeft from './icons/IconArrowLeft.vue'

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
    <div class="py-10 sm:py-20">
      <AppContainer>
        <div class="flex flex-col items-center justify-center gap-5">
          <h1 class="text-2xl font-medium text-center text-white sm:text-[32px] leading-[40px]">
            Find beauty and wellness services near you
          </h1>
          <div
            class="flex flex-col items-center justify-center w-full gap-4 text-sm sm:mt-10 md:w-fit md:flex-row"
          >
            <div
              class="flex flex-col md:flex-row items-center flex-1 divide-y md:divide-y-0 md:divide-x divide-gray-200 max-w-[864px] w-full mx-auto bg-white rounded-lg h-[56px]"
            >
              <!-- Location dropdown -->
              <div
                class="flex items-center justify-between w-full gap-2 px-4 py-2 md:justify-start"
              >
                <div class="flex items-center gap-3">
                  <IconLocation />
                  <span class="text-gray-30">Location: </span>
                </div>
                <select class="p-3 bg-transparent appearance-none md:p-4 focus:outline-none">
                  <option>All</option>
                  <option>Lagos</option>
                  <option>Uyo</option>
                </select>
              </div>

              <!-- Date dropdown -->
              <div
                class="flex items-center justify-between w-full gap-2 px-4 py-2 md:py-0 md:justify-start"
              >
                <div class="flex items-center gap-3">
                  <IconCalendar />
                  <span class="text-gray-30">Date: </span>
                </div>
                <select class="p-3 bg-transparent appearance-none md:p-1 focus:outline-non">
                  <option>Any day</option>
                </select>
              </div>

              <!-- Search input -->
              <div class="flex items-center w-full gap-2 px-4 py-4 md:py-0">
                <IconSearch />
                <input
                  type="text"
                  placeholder="Search for service. E.g Braids"
                  class="w-full px-4 py-1 lg:w-96 focus:outline-none placeholder:text-gray-30"
                />
              </div>
            </div>
            <!-- Search button -->
            <Button class="p-4 md:p-7 place-self-start" size="lg"> Search </Button>
          </div>
          <div class="flex items-center gap-2 sm:gap-4">
            <Button variant="secondary" class="gap-1 p-0 text-xs sm:p-4 sm:text-sm"
              ><IconSearch :width="16" :height="16" /> Hair salon</Button
            >
            <Button variant="secondary" class="gap-1 p-0 text-xs sm:p-4 sm:text-sm"
              ><IconSearch :width="16" :height="16" /> Knotless braids</Button
            >
            <Button variant="secondary" class="gap-1 p-0 text-xs sm:p-4 sm:text-sm"
              ><IconSearch :width="16" :height="16" /> Hair treatment</Button
            >
          </div>
          <div class="flex items-center justify-between w-full gap-4 mt-10">
            <h1 class="text-white">Catagories</h1>
            <div class="flex items-center gap-4">
              <button
                @click="scroll('prev')"
                class="flex items-center justify-center p-2 rounded-full w-7 h-7 bg-primary-50"
              >
                <IconArrowLeft />
              </button>
              <button
                @click="scroll('next')"
                class="flex items-center justify-center p-2 rotate-180 rounded-full w-7 h-7 bg-primary-50"
              >
                <IconArrowLeft />
              </button>
            </div>
          </div>
        </div>
      </AppContainer>
      <!-- Categories -->
      <div class="flex items-center mt-5">
        <div class="shrink-0 snap-center hidden nano:block nano:w-[5%] 3xl:w-[7%] 4xl-[1704px]:hidden h-48" />
        <div ref="scrollContainer" class="relative flex flex-col nano:flex-row gap-4 overflow-x-auto mx-auto 4xl:w-[1440px] 4xl:max-w-[90%]">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="flex flex-col gap-2 text-xs shrink-0 sm:text-sm snap-center"
          >
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
  </div>
</template>
