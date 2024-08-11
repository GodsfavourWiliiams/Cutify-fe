<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactInfo from '@/components/ContactInfo.vue'
</script>

<template>
  <AppContainer>
    <div
      class="relative z-30 grid items-end justify-center gap-10 pt-10 pb-20 -mt-20 lg:-mt-36 xl:-mt-28 lg:gap-4 lg:grid-cols-2"
    >
      <ContactInfo />
      <ContactForm />
    </div>
  </AppContainer>
</template>
