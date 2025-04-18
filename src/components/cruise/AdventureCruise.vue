<template>
    <section class="md:py-20 py-10 bg-white text-[#1A1A1A] font-switzer">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="mb-12">
          <p class="text-sm md:text-2xl tracking-wide uppercase font-light">03</p>
          <h2 class="text-sm md:text-2xl font-light mb-4">Expedition & Adventure Cruises</h2>
          <hr class="border-gray-300" />
        </div>
  
        <!-- Content Grid -->
        <div class="grid md:grid-cols-2 gap-10 items-start">
          <!-- Image Column (shown first on mobile via order) -->
          <div class="order-1 md:order-2 flex justify-center md:justify-end">
            <div class="relative w-full max-w-md sm:max-w-md md:max-w-[600px] md:h-[600px]">
              <div class="absolute  -right-[40px] top-[20px] sm:top-[40px] w-full h-full bg-[#E6F4FF] z-0"></div>
              <img
                src="@/assets/images/cruise-page/expedition-hero.png"
                alt="Expedition Cruise"
                class="relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>
  
          <!-- Text Column -->
          <div class="order-2 md:order-1 space-y-6">
            <h1 class="text-[28px] md:text-[44px] font-cormorant font-semibold">
              Explore the uncharted
            </h1>
            <p class="text-sm md:text-xl text-[#4B5563] font-light">
              For those who seek off-the-beaten-path travel, Serenity Quest offers small-ship expeditions to remote and exotic destinations.
            </p>
  
            <!-- Highlight Box -->
            <div class="bg-secondary border border-[#B8E5FF] rounded-md px-6 py-4 md:px-6 md:py-8 text-[#062E4B] font-light">
              <h4 class="font-semibold mb-4 text-base md:text-2xl">Featured Adventure Routes:</h4>
              <ul class="list-disc md:ml-6 list-inside space-y-2 text-sm md:text-xl">
                <li>Indonesia’s Komodo Islands – Diving, wildlife, and nature exploration</li>
                <li>The Philippines’ Hidden Beaches – Pristine white-sand islands and snorkelling excursions</li>
                <li>The Andaman Sea – Marine conservation, island-hopping, and eco-tourism experiences</li>
              </ul>
              <p class="mt-4 text-sm md:text-xl">
                Perfect for: Nature lovers, adventure seekers, and those looking for once-in-a-lifetime exploration.
              </p>
            </div>
  
            <!-- Unified CTA Button -->
            <button
              class="mt-6 w-full sm:w-auto border border-primary text-primary px-6 py-3 uppercase text-sm tracking-wide font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No logic needed
  </script>
  
  <style scoped></style>
  