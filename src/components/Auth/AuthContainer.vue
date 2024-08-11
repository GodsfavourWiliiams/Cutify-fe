<template>
  <div class="flex flex-col justify-center h-full gap-5 md:gap-0 md:flex-row md:h-screen">
    <div
      class="md:max-w-[600px] w-full overflow-hidden bg-[url('/src/assets/images/auth-bg.png')] h-96 md:h-full bg-cover bg-center flex flex-col gap-4 items-center justify-center"
    >
      <div
        class="max-w-[440px] mx-auto w-full flex flex-col gap-2 items-center justify-center text-white p-4 lg:p-0"
      >
        <RouterLink to="/" class="text-[90px] font-bold">Cutify</RouterLink>
        <p class="leading-[40px] font-semibold text-sm md:text-base text-center">
          Embrace self-care and indulge in a world of beauty and wellness. Explore our curated
          selection of services and effortlessly book appointments right in your neighborhood.
        </p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
