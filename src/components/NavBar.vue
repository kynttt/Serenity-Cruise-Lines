<template>
  <nav class="h-[80px] md:h-[112px] bg-transparent shadow-sm border-b flex items-center">
    <div class="container mx-auto flex items-center justify-between w-full px-4">
      <!-- Logo + Brand -->
      <div class="flex items-center space-x-4">
        <img :src="logoSrc" alt="Serenity Cruise Lines logo" class="h-8 md:h-[32px] w-12 md:w-[47px]" />
        <span
          class="font-cormorant font-bold text-xl sm:text-2xl md:text-[32px] text-[#404040] leading-[120%] tracking-[-0.01em]"
        >
          Serenity Cruise Lines
        </span>
      </div>

      <!-- Desktop nav (md and up) -->
      <div class="hidden md:flex items-center gap-6 lg:gap-12">
        <ul class="text-base md:text-[20px] flex items-center gap-6 lg:gap-10 text-[#404040]">
          <li><router-link to="/about" class="nav-link" active-class="border-b border-primary text-primary">About Us</router-link></li>
          <li><router-link to="/cruise" class="nav-link" active-class="border-b border-primary text-primary">Cruises</router-link></li>
          <li><a href="#" class="nav-link disabled">Fleet</a></li>
          <li><a href="#" class="nav-link disabled">Destinations</a></li>
          <li><a href="#" class="nav-link disabled">Careers</a></li>
          <li>
            <a href="#" class="flex items-center gap-1">
              Others
              <ChevronDown class="w-4 h-4 stroke-[2] text-[#404040]" />
            </a>
          </li>
        </ul>
        <BaseButton
          width="178px"
          height="56px"
          bg="bg-primary"
          color="text-white"
          :rounded="8"
        >
          CONTACT US
        </BaseButton>
      </div>

      <!-- Mobile hamburger menu -->
      <button class="md:hidden" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#404040]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-white flex flex-col px-4 py-4 space-y-6 md:hidden"
      >
        <!-- Top bar -->
        <div class="flex justify-between items-center pt-2">
          <div class="flex items-center space-x-4">
            <img :src="logoSrc" class="h-8 md:h-[32px] w-12 md:w-[47px]" />
            <span class="font-cormorant font-bold text-xl sm:text-2xl md:text-[32px] text-[#404040] leading-[120%] tracking-[-0.01em]">Serenity Cruise Lines</span>
          </div>
          <button @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile nav links -->
        <ul class="pb-8 space-y-4 text-base sm:text-[20px] text-secondary border-b border-gray-300">
          <li class=""><router-link to="/" @click="toggleMenu" class="text-xl text-[#062E4B]" active-class="border-b border-primary text-primary">About Us</router-link></li>
          <li class=""><router-link to="/cruise" @click="toggleMenu" class="text-xl text-[#062E4B]" active-class="border-b border-primary text-primary">Cruises</router-link></li>
          <li><a href="#"  class="text-xl text-[#062E4B]" active-class="border-b border-primary text-primary">Fleet</a></li>
          <li><a href="#" class="text-xl text-[#062E4B]" active-class="border-b border-primary text-primary">Destinations</a></li>
          <li><a href="#" class="text-xl text-[#062E4B]" active-class="border-b border-primary text-primary">Careers</a></li>
          <li>
            <a href="#" class="flex items-center gap-1">
              Others
              <ChevronDown class="w-4 h-4 stroke-[2] text-[#404040]" />
            </a>
          </li>
        </ul>

        <!-- Contact button -->
        <BaseButton
          width="100%"
          height="56px"
          bg="bg-primary"
          color="text-white"
          :rounded="8"
        >
          CONTACT US
        </BaseButton>
      </div>
    </transition>
  </nav>
</template>




<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import logoSrc from '@/assets/logo-serenity.png'
import { ChevronDown } from 'lucide-vue-next'

export default defineComponent({
  name: 'NavBar',
  components: { BaseButton, ChevronDown },
  setup() {
    const isOpen = ref(false)
    const toggleMenu = () => { isOpen.value = !isOpen.value }
    return { logoSrc, isOpen, toggleMenu }
  }
})
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
