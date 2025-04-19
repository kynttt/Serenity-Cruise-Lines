<template>
    <section
      class="relative w-full h-screen bg-cover bg-center text-white flex items-center"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/5"></div>
  
      <div class="relative z-10 container mx-auto px-4">
        <div class="max-w-3xl">
          <h1 class="text-[32px] md:text-[72px] leading-snug md:leading-[1.2] font-cormorant font-semibold text-white mb-6 md:mb-8">
            Discover Your Perfect<br />
            Cruise
          </h1>
          <p class="space-y-6 text-[#404040] font-switzer text-base md:text-2xl leading-relaxed font-light text-white mb-8">
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
      <div
  class="absolute bottom-6 left-0 right-0 w-full px-4 container mx-auto 
         flex flex-col sm:flex-row justify-between items-center sm:items-start text-sm md:text-xl 
         font-extralight text-white font-switzer gap-2 sm:gap-0"
>
  <!-- Scroll text: Left-aligned on sm, right-aligned on md+ -->
  <div class="text-left sm:text-right w-full sm:w-auto order-1 sm:order-2">
    SCROLL TO EXPLORE MORE
  </div>

  <!-- Cruises label: Hidden on small, shown on md+ -->
  <div class="hidden md:flex text-left sm:text-left w-full sm:w-auto order-2 sm:order-1">
    CRUISES
  </div>
</div>


     
    </section>
  </template>
  
  <script setup lang="ts">
  import BaseButton from '@/components/BaseButton.vue'
  import bgImage from '@/assets/images/cruise-page/cruise-bg.png'
  </script>
  