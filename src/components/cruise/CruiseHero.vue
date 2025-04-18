<template>
    <section
      class="relative w-full h-screen bg-cover bg-center text-white flex items-center"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>
  
      <div class="relative z-10 container mx-auto px-4">
        <div class="max-w-3xl">
          <h1 class="text-[32px] md:text-[72px] leading-snug md:leading-[1.2] font-cormorant font-semibold text-white mb-6 md:mb-8">
            Discover Your Perfect<br />
            Cruise
          </h1>
          <p class="space-y-6 text-[#404040] font-switzer text-base md:text-[20px] leading-relaxed font-light text-white mb-8">
            Serenity Cruise Lines offers a selection of thoughtfully curated
            itineraries designed for every traveller.
          </p>
  
          <div class="flex flex-col sm:flex-row gap-4">
            <BaseButton
              width="216px"
              height="52px"
              bg="bg-primary"
              color="text-white"
              :rounded="0"
            >
              EXPLORE DESTINATIONS
            </BaseButton>
            <BaseButton
              width="160px"
              height="52px"
              bg="transparent"
              color="text-white"
              class="border border-white"
              :rounded="0"
            >
              BOOK NOW
            </BaseButton>
          </div>
        </div>
      </div>
  
      <!-- Scroll Hint -->
      <div class="absolute bottom-8 right-6 text-sm text-white font-switzer">
        SCROLL TO EXPLORE MORE
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import BaseButton from '@/components/BaseButton.vue'
  import bgImage from '@/assets/images/cruise-page/cruise-bg.png'
  </script>
  