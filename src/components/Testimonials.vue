<script setup lang="ts">
import AppContainer from './AppContainer.vue'
import TestimonialCard from './TestimonialCard.vue'

const testimonials = [
  {
    name: 'Jessica T.',
    date: '12th may, 2023',
    feedback:
      'I love how convenient it is to book my favorite spa treatments through this platform. The service providers are top-notch!'
  },
  {
    name: 'John D.',
    date: '12th may, 2023',
    feedback:
      "As a professional in the industry, I've found this platform to be a game-changer. It connects me with clients who value my expertise."
  },
  {
    name: 'Jessica T.',
    date: '12th may, 2023',
    feedback:
      'I love how convenient it is to book my favorite spa treatments through this platform. The service providers are top-notch!'
  }
]
</script>

<template>
  <div class="py-24 bg-[#F8FCFE]">
    <AppContainer>
      <div
        class="flex flex-wrap items-start justify-center max-w-sm mx-auto gap-y-8 lg:gap-y-0 md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 sm:max-w-2xl lg:max-w-full"
      >
        <div class="flex items-center w-full gap-5 lg:w-1/4">
          <span class="block text-[32px] max-w-[268px] font-semibold text-gray leading-[48px]"
            >What people are saying about us?</span
          >
          <p class="text-sm text-start text-gray-50 leading-[32px] max-w-[330px]">
            Check out what customers and professionals are happily sharing about their Cutify
            experiences.
          </p>
          <div class="mt-10 place">
            <img src="/src/assets/red-right-arrow.png" alt="" class="">
          </div>
        </div>

        <div class="w-full mt-20 lg:w-4/5">
          <div class="flex items-center gap-4">
            <TestimonialCard
              v-for="(item, index) in testimonials"
              :key="index"
              :date="item.date"
              :name="item.name"
              :feedback="item.feedback"
            />
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>
