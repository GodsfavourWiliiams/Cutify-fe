<script setup lang="ts">
import FeatureItem from './FeatureItem.vue'
import Button from './Button.vue'
import AppContainer from './AppContainer.vue'


type Feature = {
  icon: 'booking' | 'cog' | 'user' | 'users' | 'bell' | 'creditCard';
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
  <AppContainer class="py-10 space-y-10">
    <h2 class="text-2xl leading-[40px] sm:text-[32px] font-medium text-gray text-center">
      Why Cutify service booking app
      <span class="text-primary-60">is perfect for you</span>
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
