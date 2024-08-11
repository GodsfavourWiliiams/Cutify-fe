<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '../Common/Button.vue'
import AuthWrapper from './AuthWrapper.vue'
import IconGoogle from '../icons/IconGoogle.vue'
import IconFacebook from '../icons/IconFacebook.vue'
import IconApple from '../icons/IconApple.vue'
import IconEyeStroke from '../icons/IconEyeStroke.vue'
import IconEye from '../icons/IconEye.vue'
import IconCheck from '../icons/IconCheck.vue'
import Input from '../Common/Input.vue'

const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const passwordStrength = computed(() => {
  const hasMinLength = password.value.length >= 8
  const hasLowerCase = /[a-z]/.test(password.value)
  const hasUpperCase = /[A-Z]/.test(password.value)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password.value)

  return {
    hasMinLength,
    hasLowerCase,
    hasUpperCase,
    hasSpecialChar
  }
})

const isPasswordValid = computed(() => {
  return Object.values(passwordStrength.value).every(Boolean)
})

const doPasswordsMatch = computed(() => {
  return password.value === confirmPassword.value
})

const agreeToTerms = ref(false)

const canRegister = computed(() => {
  return isPasswordValid.value && doPasswordsMatch.value && agreeToTerms.value
})

const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
  if (field === 'password') {
    showPassword.value = !showPassword.value
  } else {
    showConfirmPassword.value = !showConfirmPassword.value
  }
}
</script>

<template>
  <AuthWrapper>
    <div class="flex flex-col mx-auto w-full max-w-[584px] gap-4">
      <div class="flex flex-wrap items-center justify-start w-full gap-1 md:justify-end">
        <p class="text-base shrink-0">Are you a service provider?</p>
        <RouterLink to="/auth/sign-in" class="text-primary shrink-0"
          >Sign up as a professional</RouterLink
        >
      </div>
      <div class="flex flex-col items-start p-5 space-y-8 border rounded-lg md:p-10">
        <div class="text-start">
          <h1 class="text-2xl md:text-[40px] leading-[64px] font-bold text-gray">
            Sign up as a customer
          </h1>
          <p class="text-sm md:text-lg">
            Please enter your details to continue with your account creation.
          </p>
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

        <div class="w-full space-y-4">
          <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-4">
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="Last name" />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <Input type="email" placeholder="Email address" />
              <Input type="number" placeholder="Phone number" />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <Input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Password"
              >
                <template #endContent>
                  <button @click="togglePasswordVisibility('password')" type="button">
                    <IconEyeStroke v-if="showPassword" />
                    <IconEye v-else />
                  </button>
                </template>
              </Input>
              <Input
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Confirm password"
              >
                <template #endContent>
                  <button @click="togglePasswordVisibility('confirmPassword')" type="button">
                    <IconEyeStroke v-if="showConfirmPassword" />
                    <IconEye v-else />
                  </button>
                </template>
              </Input>
            </div>
          </div>
          <!-- Password strength indicators -->
          <div class="flex flex-col gap-2 py-4 text-xs">
            <div class="flex flex-wrap items-center gap-2">
              <div
                :class="[
                  'flex items-center gap-1',
                  {
                    'text-success': passwordStrength.hasMinLength,
                    'text-gray-10': !passwordStrength.hasMinLength
                  }
                ]"
              >
                <IconCheck />
                <p class="text-gray-40">At least 8 characters strong</p>
              </div>
              <div
                :class="[
                  'flex items-center gap-1',
                  {
                    'text-success': passwordStrength.hasLowerCase,
                    'text-gray-10': !passwordStrength.hasLowerCase
                  }
                ]"
              >
                <IconCheck />
                <p class="text-gray-40">One lower case character</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-4">
              <div
                :class="[
                  'flex items-center gap-1',
                  {
                    'text-success': passwordStrength.hasUpperCase,
                    'text-gray-10': !passwordStrength.hasUpperCase
                  }
                ]"
              >
                <IconCheck />
                <p class="text-gray-40">One upper case</p>
              </div>
              <div
                :class="[
                  'flex items-center gap-1',
                  {
                    'text-success': passwordStrength.hasSpecialChar,
                    'text-gray-10': !passwordStrength.hasSpecialChar
                  }
                ]"
              >
                <IconCheck />
                <p class="text-gray-40">A symbol or special character</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <!-- Terms agreement checkbox -->
            <div class="flex items-start gap-4 md:items-center">
              <input type="checkbox" v-model="agreeToTerms" />
              <div class="inline-flex flex-wrap gap-2 text-sm">
                <span class="text-gray">By registering you are agreeing to our</span>
                <RouterLink to="#" class="text-primary"> Terms of use</RouterLink> and
                <RouterLink to="#" class="text-primary">Privacy Policy.</RouterLink>
              </div>
            </div>
            <!-- Sign up button -->
            <Button size="lg" class="w-full" :disabled="!canRegister"> Sign up </Button>
          </div>
        </div>
        <div class="flex w-full gap-1 text-center">
          <p class="text-sm md:text-base">Already have an account?</p>
          <RouterLink to="/auth/sign-in" class="text-sm text-primary md:text-base"
            >Login</RouterLink
          >
        </div>
      </div>
    </div>
  </AuthWrapper>
</template>
