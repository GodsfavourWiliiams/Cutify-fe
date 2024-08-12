<script setup lang="ts">
import FeatureItem from './FeatureItem.vue'
import Button from './Common/Button.vue'
import AppContainer from './AppContainer.vue'

type Feature = {
  icon: 'booking' | 'cog' | 'user' | 'users' | 'bell' | 'creditCard'
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: 'booking',
    title: 'Easy booking',
    description:
      'Say goodbye to long wait times and phone calls. Browse and book beauty and wellness services with ease with our user-friendly interface. Book your favorite services anytime, anywhere'
  },
  {
    icon: 'cog',
    title: 'Wide Range of Services',
    description:
      'Discover a diverse array of beauty and wellness services all in one place. We have everything you need to look and feel your best.'
  },
  {
    icon: 'users',
    title: 'Expert Professionals',
    description:
      'Connect with top professionals who are dedicated to providing top-notch services tailored to your preferences. '
  },
  {
    icon: 'user',
    title: 'Personalized Experience',
    description:
      'Customize your appointments according to your schedule, preferences, and desired treatments. Enjoy a personalized experience that caters to your individual needs.'
  },
  {
    icon: 'bell',
    title: 'Convenient Reminders',
    description:
      'Never miss an appointment again with our convenient reminder notifications. Stay organized and keep track of your upcoming beauty and wellness sessions effortlessly.'
  },
  {
    icon: 'creditCard',
    title: 'Secure Payment',
    description:
      'Experience worry-free transactions with our secure payment options. Your financial information is protected, allowing you to focus solely on your self-care journey.'
  }
]
</script>

<template>
  <AppContainer class="py-10 space-y-10 overflow-hidden">
    <h2 class="text-2xl leading-[40px] sm:text-[32px] font-medium text-gray text-center">
      Why Cutify service booking app
      <br class="block lg:hidden">
      <span class="relative font-normal text-primary-60"> is perfect for you   <svg
        class="absolute bottom-0 -top-1 -right-64 w-fit"
        width="482"
        height="54"
        viewBox="0 0 482 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M481.179 33.6683C374.544 -1.63034 262.32 -14.765 243.005 33.9003C223.69 82.5656 112.215 6.37981 0.951175 51.6712"
          stroke="#DDC6A6"
          stroke-width="4.01509"
        />
      </svg></span>
    
    </h2>
    <div class="grid gap-8 md:grid-cols-2">
      <FeatureItem
        v-for="feature in features"
        :key="feature.title"
        :icon="feature.icon"
        :title="feature.title"
        :description="feature.description"
      />
    </div>
    <div class="mt-8 text-center">
      <Button size="lg"> Try Cutify now </Button>
    </div>
  </AppContainer>
</template>
