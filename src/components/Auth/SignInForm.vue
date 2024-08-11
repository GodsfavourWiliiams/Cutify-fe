<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '../Common/Button.vue'
import AuthWrapper from './AuthWrapper.vue'
import IconGoogle from '../icons/IconGoogle.vue'
import IconFacebook from '../icons/IconFacebook.vue'
import IconApple from '../icons/IconApple.vue'
import { ref } from 'vue'
import IconEyeStroke from '../icons/IconEyeStroke.vue'
import IconEye from '../icons/IconEye.vue'
import Input from '../Common/Input.vue'

const router = useRouter()
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <AuthWrapper>
    <div
      class="flex flex-col items-start mx-auto w-full max-w-[584px] p-5 lg:p-10 space-y-8 border rounded-lg"
    >
      <div class="text-start">
        <h1 class="text-2xl md:text-[40px] leading-[64px] font-bold text-gray">Welcome Back</h1>
        <p class="text-sm md:text-lg">Enter your details to login to your account.</p>
      </div>
      <div class="flex flex-col items-center justify-center w-full space-y-4">
        <div class="flex items-center justify-center gap-10">
          <Button variant="outline" class="w-[48px] h-[48px]">
            <IconGoogle />
          </Button>
          <Button variant="outline" class="w-[48px] h-[48px] text-[#3B5998]">
            <IconFacebook />
          </Button>
          <Button variant="outline" class="w-[48px] h-[48px]">
            <IconApple />
          </Button>
        </div>

        <div class="flex items-center w-full gap-4">
          <hr class="w-full h-1" />
          <p>Or</p>
          <hr class="w-full h-1" />
        </div>
      </div>

      <div class="w-full space-y-5">
        <Input type="email" id="email" placeholder="Email address" />
        <Input placeholder="Password">
          <template #endContent>
            <button @click="togglePasswordVisibility()" type="button">
              <IconEyeStroke v-if="showPassword" />
              <IconEye v-else />
            </button>
          </template>
        </Input>
        <div class="flex items-start justify-between w-full gap-4 text-sm">
          <div class="flex items-center gap-2">
            <input type="checkbox" />
            <span class="text-gray">Remember me</span>
          </div>
          <RouterLink to="#" class="text-primary">Forgot password</RouterLink>
        </div>
        <Button size="lg" disabled class="w-full"> Login </Button>
      </div>
      <div class="flex flex-col w-full gap-4 text-center">
        <p class="text-sm md:text-base">Don’t have an account?</p>
        <Button size="lg" @click="router.push('/auth/sign-up')"> Sign up as customer </Button>
        <Button size="lg" class="text-white bg-primary-70 hover:bg-primary-70/80">
          Sign up as a professional
        </Button>
      </div>
    </div>
  </AuthWrapper>
</template>
