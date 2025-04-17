<template>
    <section class="relative border-b border-gray-200 bg-white py-24 overflow-hidden">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between relative z-10">
        <!-- Text Content -->
        <div class="md:w-1/2 text-[#1A1A1A] z-10">
          <h1 class="text-[72px] leading-[1.2] font-cormorant font-bold text-txtPrimary-color mb-8">
            Welcome to Serenity Cruise Lines
          </h1>
          <div class="space-y-6 text-[#404040] font-switzer text-[20px] leading-relaxed">
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
          <button class="mt-8 px-6 py-3 border border-[#0068A5] text-[#0068A5] hover:bg-[#0068A5] hover:text-white transition-colors duration-300 uppercase text-sm tracking-wide">
            Read More About Us
          </button>
        </div>
  
        <!-- Image with Background Layer -->
        <div class="md:w-1/2 mt-12 md:mt-0 relative md:pl-20">
          <div class="relative w-[600px] h-[600px] md:h-[600px]">
            <div class="absolute right-[-30px] top-[30px] w-full h-full bg-[#E6F4FF]  z-0"></div>
            <img
              src="@/assets/images/cruise-hero.png"
              alt="Serenity Cruise Ship"
              class="relative z-10 w-[600px] h-[600px] object-cover  shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No logic needed
  </script>
  
  <style scoped>
  </style>
  