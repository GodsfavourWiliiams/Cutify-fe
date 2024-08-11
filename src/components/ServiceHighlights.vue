<script setup>
import ServiceCard from './ServiceCard.vue'
import AppContainer from './AppContainer.vue'
import IconArrowRight from './icons/IconArrowRight.vue'
import serviceImgOne from '@/assets/images/service-img-one.png'
import serviceImgTwo from '@/assets/images/service-img-two.png'
import serviceImgThree from '@/assets/images/service-img-three.png'
import categoryThree from '@/assets/images/category-three.png'
import serviceImgFive from '@/assets/images/service-img-five.png'
import serviceImgSix from '@/assets/images/service-img-six.png'
</script>

<template>
  <AppContainer class="py-10 space-y-6 sm:py-28">
    <div class="flex flex-col gap-4">
      <div class="space-y-4 max-w-[737px] w-full">
        <h1 class="text-2xl leading-[32px] sm:text-[32px] font-medium text-left text-gray">
          Explore popular service on Cutify
        </h1>
        <p class="text-sm text-left leading-[32px] text-gray-50">
          Check our top-rated services for an exceptional beauty and wellness experience. From
          relaxing spa treatments to expert styling.
        </p>
      </div>

      <div
        class="flex flex-col items-start justify-between w-full gap-4 sm:items-center sm:flex-row"
      >
        <div class="flex flex-wrap items-start text-sm leading-[32px] text-gray-50">
          <p class="mr-2">Have a service you want to onboard?</p>
          <RouterLink to="/register" class="font-medium text-primary-50">
            Sign up as a professional
          </RouterLink>
        </div>
        <button class="flex items-center gap-2 text-sm font-medium text-primary place-self-end">
          <span>See more</span>
          <IconArrowRight />
        </button>
      </div>
    </div>

    <div class="flex flex-col items-center w-full gap-2.5 sm:gap-4 md:flex-row">
      <ServiceCard
        :title="'MOJ Spa center'"
        :address="'No 26. St Ives street. Lagos island. Lagos.'"
        :rating="'5.0'"
        :reviews="'100 reviews'"
        :image="serviceImgOne"
        :className="'w-full md:w-fit lg:w-full'"
      />
      <div class="flex items-center w-full gap-2.5 sm:gap-4">
        <ServiceCard
          :title="'Hollaja MakeUp studio'"
          :address="'No 26. St Ives street. Lagos island. Lagos.'"
          :rating="'5.0'"
          :reviews="'100 reviews'"
          :image="serviceImgTwo"
          :className="'w-full'"
        />
        <ServiceCard
          :title="'Hollaja MakeUp studio'"
          :address="'No 26. St Ives street. Lagos island. Lagos.'"
          :rating="'5.0'"
          :reviews="'100 reviews'"
          :image="serviceImgThree"
          :className="'w-full'"
        />
      </div>
    </div>
    <div class="flex flex-col items-center gap-2.5 sm:gap-4 md:flex-row">
      <div class="flex items-center w-full gap-2.5 sm:gap-4">
        <ServiceCard
          :title="'Hollaja MakeUp studio'"
          :address="'No 26. St Ives street. Lagos island. Lagos.'"
          :rating="'5.0'"
          :reviews="'100 reviews'"
          :image="categoryThree"
          :className="'w-full'"
        />
        <ServiceCard
          :title="'Hollaja MakeUp studio'"
          :address="'No 26. St Ives street. Lagos island. Lagos.'"
          :rating="'5.0'"
          :reviews="'100 reviews'"
          :image="serviceImgFive"
          :className="'w-full'"
        />
      </div>
      <ServiceCard
        :title="'MOJ Spa center'"
        :address="'No 26. St Ives street. Lagos island. Lagos.'"
        :rating="'5.0'"
        :reviews="'100 reviews'"
        :image="serviceImgSix"
        :className="'w-full md:w-fit lg:w-full'"
      />
    </div>
  </AppContainer>
</template>
