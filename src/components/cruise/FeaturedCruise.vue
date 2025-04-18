<template>
    <section class="md:py-20 py-8 bg-white text-[#1A1A1A] font-switzer">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="mb-12">
          <p class="text-sm md:text-2xl tracking-wide uppercase font-light">01</p>
          <h2 class="text-sm md:text-2xl md:mb-12 mb-8 font-light">Featured Cruises</h2>
          <hr class="mt-4 border-gray-300" />
        </div>
  
        <!-- Main Content Grid -->
        <div class="grid md:grid-cols-2 gap-2 md:space-y-0 space-y-8  items-start">
          <!-- Image with offset background -->
          <div class="relative w-fit mx-auto md:mx-0">
            <div class="absolute -left-5 sm:-left-10 bottom-[-20px] sm:bottom-[-40px] bg-[#E6F4FF] w-full h-full z-0"></div>
            <img
              src="@/assets/images/cruise-page/featured-cruise.png"
              alt="Cruise ship"
              class="relative z-10 w-full max-w-xs md:max-w-2xl object-cover"
            />
          </div>
  
          <!-- Text Content -->
          <div class="space-y-6 ">
            <h1 class="text-[28px] md:text-[44px] font-cormorant font-semibold text-[#1A1A1A]">
              Grand Asia Voyage
            </h1>
  
            <!-- Meta Info -->
            <div class="space-y-4 text-txtPrimary-color font-light md:pb-6">
              <div class="flex items-center gap-3 text-sm md:text-xl">
                <img src="@/assets/icons/cruise-page/routing.png" alt="routing icon" class="md:w-10 md:h-10 w-6 h-6 mt-[2px]" />
                <p>Singapore → Malaysia → Thailand → Vietnam → China → South Korea</p>
              </div>
              <div class="flex items-center gap-3 text-sm md:text-xl">
                <img src="@/assets/icons/cruise-page/clock.png" alt="clock icon" class="md:w-10 md:h-10 w-6 h-6" />
                <p>12 Days</p>
              </div>
              <div class="flex items-center gap-3 text-sm md:text-xl">
                <img src="@/assets/icons/cruise-page/diamond.png" alt="diamond icon" class="md:w-10 md:h-10 w-6 h-6" />
                <p>Luxury Experience</p>
              </div>
            </div>
  
            <!-- Highlight Box -->
            <div class="bg-secondary text-[#062E4B] border border-[#B8E5FF] rounded-md px-6 py-4 md:px-6 md:py-8 font-light">
              <h4 class="font-semibold mb-6 text-base md:text-2xl">Highlights</h4>
              <ul class="list-disc md:ml-6 list-inside space-y-1 text-sm md:text-xl">
                <li>Discover historic cities, pristine beaches, and world-famous landmarks</li>
                <li>Michelin-inspired dining and exclusive onboard entertainment</li>
                <li>Enriching shore excursions, from cultural tours to adventure experiences</li>
              </ul>
            </div>
  
            <!-- CTA Button -->
            <button
              class="w-full sm:w-auto border border-gray-300 text-primary px-6 py-3 uppercase text-sm tracking-wide font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View Itinerary
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No logic needed here
  </script>
  
  <style scoped></style>
  