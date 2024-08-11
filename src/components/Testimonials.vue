<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue'
import IconQuote from './icons/IconQuote.vue'

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
  <div class="relative mt-10">
    <div class="absolute right-0 hidden w-full lg:block -bottom-32">
      <img src="/src/assets/Rectangle-8.svg" class="w-full h-full max-h-[600px]" alt="" />
    </div>
    <div class="py-24 bg-[#F8FCFE] mx-auto w-[1540px] max-w-[90%] lg:max-w-full px-4 sm:px-10">
      <div
        class="flex flex-wrap items-start justify-center max-w-sm mx-auto gap-y-0 md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 sm:max-w-2xl lg:max-w-full"
      >
        <div class="flex flex-col items-start w-full gap-5 lg:w-1/4">
          <span class="block text-[32px] max-w-[268px] font-semibold text-gray leading-[48px]"
            >What people are saying about us?</span
          >
          <p class="text-sm text-start text-gray-50 leading-[32px] max-w-[330px]">
            Check out what customers and professionals are happily sharing about their Cutify
            experiences.
          </p>
          <div class="mt-0 md:mt-10 lg:place-self-end">
            <img src="/src/assets/red-right-arrow.png" alt="" class="" />
          </div>
        </div>

        <div class="flex flex-col w-full gap-4 -mt-11 lg:mt-10 lg:w-4/5">
          <div class="place-self-end">
            <IconQuote />
          </div>
          <div class="flex flex-wrap items-center gap-4 xl:flex-nowrap">
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
    </div>
  </div>
</template>
