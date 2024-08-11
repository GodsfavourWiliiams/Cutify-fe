<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <div class="lg:order-2 order-1 max-w-[536px] w-full px-4 sm:px-6 py-8 space-y-6 border-gray-10 bg-white border rounded-lg h-fit mb-0 lg:mb-20 xl:mb-0" 
  style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
    <div class="flex flex-col items-start gap-4">
      <h2 class="text-xl sm:text-3xl leading-[40px] font-semibold text-gray">Send a message</h2>
      <p class="leading-[32px] text-sm sm:text-base text-gray-50">
        Fell free to contact us anytime. We will get back to you as soon as we can.
      </p>
    </div>

    <form class="space-y-5">
      <input
        type="text"
        id="name"
        placeholder="Name"
        class="w-full px-4 py-3 placeholder:text-[#909093] border rounded-md"
        name="name"
      />
      <input
        type="email"
        id="email"
        placeholder="Email address"
        class="w-full px-4 py-3 placeholder:text-[#909093] border rounded-md"
        name="email"
      />
      <textarea
        id="textarea"
        name="textarea"
        cols="30"
        rows="5"
        placeholder="Write your message..."
        class="w-full px-4 py-3 placeholder:text-[#909093] border rounded-md"
      />
      <div class="mt-5">
        <Button type="submit" class="w-full" size="lg"> Send Message </Button>
      </div>
    </form>
  </div>
</template>
