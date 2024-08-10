<script setup lang="ts">
import { computed } from 'vue'
import IconBooking from './icons/IconBooking.vue'
import IconSetting from './icons/IconSetting.vue'
import IconUser from './icons/IconUser.vue'
import IconUsers from './icons/IconUsers.vue'
import IconBell from './icons/IconBell.vue'
import IconCreditCard from './icons/IconCreditCard.vue'

const props = defineProps<{
  icon: string
  title: string
  description: string
}>()

const icons = {
  booking: IconBooking,
  cog: IconSetting,
  user: IconUser,
  users: IconUsers,
  bell: IconBell,
  creditCard: IconCreditCard
}

const iconComponent = computed(() => icons[props.icon] || 'div')
</script>

<template>
  <div class="flex items-start">
    <div class="flex-shrink-0 mr-4">
      <component
        :is="iconComponent"
        class="w-[48px] lg:w-[90px] h-[52px] lg:h-[100px] text-blue-500"
      />
    </div>
    <div class="max-w-[435px] w-full">
      <h3 class="mb-2 text-base font-semibold">{{ title }}</h3>
      <p class="text-sm text-gray-50 leading-[32px] text-justify">{{ description }}</p>
    </div>
  </div>
</template>
