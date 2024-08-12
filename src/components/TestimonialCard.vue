<script setup lang="ts">
defineProps<{
  date: string
  name: string
  feedback: string
}>()
</script>

<template>
  <div class="flex flex-col h-full gap-4">
    <div
      class="relative z-50 h-full px-6 py-10 bg-white border rounded-lg xl:px-8 xl:py-12 border-gray-10 max-sm:max-w-sm max-sm:mx-auto"
    >
      <p
        class="text-sm leading-6 text-gray-500 transition-all duration-500 min-h-24 group-hover:text-gray-800"
      >
        {{ feedback }}
      </p>

      <div class="absolute bottom-0 w-20 h-10 bg-white left-[0.1px]"></div>
      <div class="absolute -left-[1.3px] inline-block overflow-hidden transform -z-10 -bottom-8">
        <svg
          width="51"
          height="58"
          viewBox="0 0 51 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.97857 56.2259C5.55481 58.7172 0.750496 56.2721 0.749737 52.0378L0.741657 6.77011C0.740993 3.05084 4.5434 0.542568 7.96221 2.00704L47.1255 18.7829C50.8199 20.3654 51.3835 25.3693 48.1338 27.734L8.97857 56.2259Z"
            fill="white"
            stroke="#D3D3D4"
            stroke-width="1"
          />
        </svg>
      </div>
    </div>
    <div class="flex items-center gap-2 px-8">
      <img
        class="rounded-full w-[56px] h-[56px]"
        src="/src/assets/images/testimonial-img.png"
        alt="avatar"
      />
      <div>
        <h5 class="font-medium leading-none text-gray-900">{{ name }}</h5>
        <span class="text-xs text-gray-500">{{ date }}</span>
      </div>
    </div>
  </div>
</template>
