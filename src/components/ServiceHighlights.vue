<script setup>
import ServiceCard from './ServiceCard.vue'
import AppContainer from './AppContainer.vue'
</script>

<template>
  <AppContainer class="space-y-10 py-28">
    <div class="flex flex-col gap-4 max-w-[737px]">
      <h1 class="text-[32px] font-medium text-left text-gray">Explore popular service on Cutify</h1>
      <p class="text-sm text-left leading-[160%] text-gray-50">
        Check our top-rated services for an exceptional beauty and wellness experience. From
        relaxing spa treatments to expert styling.
      </p>
      <div class="flex items-center text-sm text-gray-50">
        Have a service you want to onboard?
        <a href="#" class="ml-2 font-semibold text-primary-50"> Sign up as a professional </a>
      </div>
    </div>

    <div class="flex flex-col items-center w-full gap-4 md:flex-row">
      <ServiceCard
        :title="'MOJ Spa center'"
        :address="'No 26. St Ives street. Lagos island. Lagos.'"
        :rating="'5.0'"
        :reviews="'100 reviews'"
        :image="'/src/assets/service-img-one.png'"
        :className="'w-full md:w-fit lg:w-full'"
      />
      <div class="flex items-center w-full gap-4">
        <ServiceCard
          :title="'Hollaja MakeUp studio'"
          :address="'No 26. St Ives street. Lagos island. Lagos.'"
          :rating="'5.0'"
          :reviews="'100 reviews'"
          :image="'/src/assets/service-img-two.png'"
          :className="'w-full'"
        />
        <ServiceCard
          :title="'Hollaja MakeUp studio'"
          :address="'No 26. St Ives street. Lagos island. Lagos.'"
          :rating="'5.0'"
          :reviews="'100 reviews'"
          :image="'/src/assets/service-img-three.png'"
          :className="'w-full'"
        />
      </div>
    </div>
    <div class="flex flex-col items-center gap-4 md:flex-row">
      <div class="flex items-center w-full gap-4">
        <ServiceCard
          :title="'Hollaja MakeUp studio'"
          :address="'No 26. St Ives street. Lagos island. Lagos.'"
          :rating="'5.0'"
          :reviews="'100 reviews'"
          :image="'/src/assets/category-three.png'"
          :className="'w-full'"
        />
        <ServiceCard
          :title="'Hollaja MakeUp studio'"
          :address="'No 26. St Ives street. Lagos island. Lagos.'"
          :rating="'5.0'"
          :reviews="'100 reviews'"
          :image="'/src/assets/service-img-five.png'"
          :className="'w-full'"
        />
      </div>
      <ServiceCard
        :title="'MOJ Spa center'"
        :address="'No 26. St Ives street. Lagos island. Lagos.'"
        :rating="'5.0'"
        :reviews="'100 reviews'"
        :image="'/src/assets/service-img-six.png'"
        :className="'w-full md:w-fit lg:w-full'"
      />
    </div>
  </AppContainer>
</template>
