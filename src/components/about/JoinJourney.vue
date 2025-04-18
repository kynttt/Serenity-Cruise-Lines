<template>
  <section
    class="py-20 md:py-[120px] text-center relative overflow-hidden"
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
        class="w-[48px] h-[53px] md:w-[60px] md:h-[66.67px] mx-auto mb-6 md:mb-[40px]"
      />

      <!-- Title -->
      <h1
        class="text-[36px] md:text-[64px] leading-[120%] md:leading-[140%] font-cormorant font-semibold text-txtPrimary-color text-center mb-6 md:mb-[32px]"
      >
        Join Us on This Journey
      </h1>

      <!-- Description -->
      <p
        class="text-[18px] md:text-[28px] text-[#062E4B] font-switzer max-w-[980px] mx-auto leading-relaxed font-light mb-10 md:mb-[56px]"
      >
        Serenity Cruise Lines is more than just a cruise company – it is a movement toward a new
        era of travel. Whether you are a traveller, investor, or business partner, we invite you to
        be a part of this exciting journey.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <BaseButton
  width="100%"
  height="56px"
  class="md:w-[245px] md:h-[64px] w-full h-[56px]"
  bg="bg-primary"
  color="text-white"
  :rounded="0"
>
  FIND YOUR CRUISE
</BaseButton>

<BaseButton
  class="w-full h-[56px] sm:w-[184px] sm:h-[64px] border border-primary"
  bg="transparent"
  color="text-primary"
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
