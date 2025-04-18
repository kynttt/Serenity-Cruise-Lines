<template>
    <section class="py-8 md:py-20 bg-white text-[#1A1A1A] font-switzer">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="mb-12">
          <p class="text-sm md:text-2xl tracking-wide uppercase font-light">06</p>
          <h2 class="text-sm md:text-2xl font-light mb-4">What’s included ?</h2>
          <hr class="border-gray-300 md:my-12" />
        </div>
  
        <!-- Grid Content -->
        <div class="grid md:grid-cols-2 items-start gap-10">
          <!-- Image w/ offset bg -->
          <div class="relative w-fit mx-auto md:mx-0">
            <div class="absolute -left-5 sm:-left-10 bottom-[-20px] sm:bottom-[-40px] bg-[#E6F4FF] w-full h-full z-0"></div>
            <img
              src="@/assets/images/cruise-page/inclusion-hero.png"
              alt="Cruise Ship"
              class="relative z-10 w-full max-w-xs md:max-w-lg object-cover"
            />
          </div>
  
          <!-- Text Content -->
          <div class="space-y-6">
            <h1 class="text-[28px] md:text-[44px] font-cormorant font-semibold">
              What’s Included in Every Cruise?
            </h1>
            <ul class="list-disc list-inside space-y-3 text-sm md:text-xl font-light text-txtPrimary-color">
              <li>All-Inclusive Dining: Full-service restaurants, casual eateries, and specialty dining experiences</li>
              <li>World-Class Entertainment: Live performances, cinema, and nightlife</li>
              <li>Wellness & Relaxation: Ocean-view spas, fitness centres, and wellness retreats</li>
              <li>Exciting Excursions: Shore tours, cultural experiences, and adventure activities</li>
              <li>Sustainable Cruising: Environmentally responsible operations and eco-friendly initiatives</li>
            </ul>
  
            <!-- CTA Button -->
            <button
              class="mt-4 w-full border md:w-[155px] border-gray-300 text-primary px-6 py-3 uppercase text-sm md:text-xl tracking-wide font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No logic required
  </script>
  
  <style scoped></style>
  