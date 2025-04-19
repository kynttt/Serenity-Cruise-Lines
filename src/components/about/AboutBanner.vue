<template>
  <section class="relative border-b md:mt-32 mt-20 border-gray-200 bg-white md:py-20 py-10 overflow-hidden">
    <div class="container mx-auto px-4 flex flex-col-reverse md:flex-row items-start md:items-center justify-between relative z-10 gap-12">
      <!-- Text Content -->
      <div class="w-full md:w-1/2 text-[#1A1A1A] z-10">
        <h1 class="text-[32px] md:text-[72px] leading-snug md:leading-[1.2] font-cormorant font-semibold text-txtPrimary-color mb-6 md:mb-8">
          Welcome to Serenity Cruise Lines
        </h1>
        <div class="space-y-6 text-[#404040] font-switzer text-base md:text-[20px] leading-relaxed font-light">
          <p>
            Serenity Cruise Lines is redefining the cruise experience in Asia, blending luxury, adventure,
            and cultural immersion to create unforgettable journeys. With a headquarters in Singapore
            and a strategic operational hub in South Korea, we are dedicated to offering world-class
            cruising tailored to both regional and international travellers.
          </p>
          <p>
            Our fleet is designed for exceptional comfort, premium service, and exploration, with
            curated itineraries connecting the most vibrant cities, pristine beaches, and rich cultural
            landscapes across Asia.
          </p>
        </div>
        <button class="mt-8 px-6 py-3 border border-[#0068A5] text-[#0068A5] hover:bg-[#0068A5] hover:text-white transition-colors duration-300 uppercase text-sm md:text-[20px] tracking-wide w-full sm:w-auto">
          Read More About Us
        </button>
      </div>

      <!-- Image with Background Layer -->
      <div class="w-full md:w-1/2 relative flex justify-end">
        <div class="relative w-full max-w-[600px]">
          <div class="absolute right-[-20px] top-[20px] w-full h-full bg-secondary z-0"></div>
          <img
            src="@/assets/images/cruise-hero.png"
            alt="Serenity Cruise Ship"
            class="relative z-10 w-full h-auto object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No JS logic needed
</script>
