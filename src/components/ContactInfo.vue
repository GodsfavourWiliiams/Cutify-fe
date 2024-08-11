<script setup lang="ts">
import IconLocation from './icons/IconLocation.vue'
import IconMail from './icons/IconMail.vue'
import IconPhoneBook from './icons/IconPhoneBook.vue'
</script>

<template>
  <div class="order-2 pr-6 space-y-10 lg:pt-32 xl:pt-0 lg:order-1 h-fit">
    <h2 class="text-3xl leading-[40px] font-semibold text-gray">Our contact info</h2>
    <div class="relative flex items-end gap-4">
      <ul class="flex flex-col items-start space-y-5">
        <li class="flex items-center gap-3">
          <div class="flex items-center justify-center w-10 h-10">
            <IconMail :height="32" :width="32" />
          </div>
          <p class="text-gray-50 text-sm leading-[32px]">Cutify_ng@info.com</p>
        </li>
        <li class="flex items-center gap-3">
          <div class="flex items-center justify-center w-10 h-10">
            <IconPhoneBook :height="32" :width="32" />
          </div>
          <p class="text-gray-50 text-sm leading-[32px]">+234- 8123456789</p>
        </li>
        <li class="flex flex-col items-start xl:flex-row shrink-0">
          <div class="flex gap-3 item-start">
            <div class="flex items-center justify-center w-10 h-10 text-gray-50">
              <IconLocation :height="32" :width="32" />
            </div>

            <p class="text-gray-50 text-sm leading-[32px] max-w-[300px] w-full">
              Goldlink House, 2 Harare Steet, Off Rabat Street, Zone 6, Wuse, Abuja..
            </p>
          </div>
          <img
            src="/src/assets/images/contact-us-info.png"
            alt="contact us info"
            class="xl:-mt-10"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
