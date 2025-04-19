<template>
  <section
    class="py-12 md:py-[100px] lg:py-[120px] text-center relative overflow-hidden"
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="relative z-10 container mx-auto px-4">
      <!-- Anchor Icon -->
      <img
        src="@/assets/icons/anchor.svg"
        alt="Anchor"
        class="w-[48px] h-[53px] md:w-[60px] md:h-[66.67px] mx-auto mb-6 md:mb-10"
      />

      <!-- Title -->
      <h1
        class="text-[28px] md:text-[44px] leading-[120%] md:leading-[140%] font-cormorant font-semibold text-txtPrimary-color mb-4 md:mb-6"
      >
        Plan Your Journey
      </h1>

      <!-- Description -->
      <p
        class="text-[16px] md:text-[20px] lg:text-[24px] text-[#062E4B] font-switzer max-w-[980px] mx-auto leading-relaxed font-light mb-8 md:mb-12"
      >
        Whether you are planning a short getaway, a cultural expedition, or a luxury escape,
        Serenity Cruise Lines has the perfect itinerary for you.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <BaseButton
          width="100%"
          height="56px"
          class="w-full sm:w-[245px] h-[56px] sm:h-[64px]"
          bg="bg-primary"
          color="text-white hover:bg-transparent hover:text-primary hover:border-primary hover:border"
          :rounded="0"
        >
          FIND YOUR CRUISE
        </BaseButton>

        <BaseButton
          class="w-full sm:w-[184px] h-[56px] sm:h-[64px] border border-primary"
          bg="transparent"
          color="text-primary hover:bg-primary hover:text-white"
          :rounded="0"
        >
          CONTACT US
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import bgImage from '@/assets/images/pattern.png'
</script>
