<template>
    <section class="md:py-20 py-8 bg-white text-[#1A1A1A] font-switzer">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="mb-12">
          <p class="text-sm md:text-2xl tracking-wide uppercase font-light">02</p>
          <h2 class="text-sm md:text-2xl font-light mb-4">Cruise Categories</h2>
          <hr class="border-gray-300" />
        </div>
  
        <!-- ✅ Mobile Horizontal Scroll -->
        <div class="flex md:hidden overflow-x-auto gap-6 pb-4 no-scrollbar">
          <div
            v-for="(item, index) in cruises"
            :key="index"
            class="flex-shrink-0 w-[280px] space-y-4"
          >
            <!-- Image -->
            <img :src="item.image" :alt="item.title" class="w-full object-cover" />
  
            <!-- Title -->
            <h3 class="text-[28px] font-cormorant font-semibold">
              {{ item.title }}
            </h3>
  
            <!-- Route Info -->
            <div class="flex items-start gap-2 text-sm text-txtPrimary-color font-light">
              <img
                src="@/assets/icons/cruise-page/routing.png"
                class="w-6 h-6 mt-[2px]"
                alt="routing icon"
              />
              <p class="leading-snug">
                {{ item.route }}<br />
                <span class="text-primary font-light">{{ item.extraRoutes }}</span>
              </p>
            </div>
  
            <!-- Meta -->
            <div class="flex items-center gap-2 text-sm text-txtPrimary-color font-light">
              <img
                src="@/assets/icons/cruise-page/clock.png"
                class="w-6 h-6"
                alt="duration icon"
              />
              <p>{{ item.duration }}</p>
            </div>
  
            <div class="flex items-center gap-2 text-sm text-txtPrimary-color font-light">
              <img
                src="@/assets/icons/cruise-page/diamond.png"
                class="w-6 h-6"
                alt="experience icon"
              />
              <p>{{ item.experience }}</p>
            </div>
  
            <!-- Button -->
            <button
              class="mt-2 border border-primary text-primary px-6 py-3 uppercase text-sm tracking-wide font-normal hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View Itinerary
            </button>
          </div>
        </div>
  
        <!-- ✅ Desktop Grid -->
        <div class="hidden md:grid md:grid-cols-3 gap-12">
          <div
            v-for="(item, index) in cruises"
            :key="index"
            class="space-y-4"
          >
            <img :src="item.image" :alt="item.title" class="w-full object-cover" />
            <h3 class="text-[32px] font-cormorant font-semibold">{{ item.title }}</h3>
  
            <div class="flex items-start gap-2 text-xl text-txtPrimary-color font-light">
              <img src="@/assets/icons/cruise-page/routing.png" class="w-10 h-10 mt-[2px]" />
              <p class="leading-snug">
                {{ item.route }}<br />
                <span class="text-primary text-base font-light">{{ item.extraRoutes }}</span>
              </p>
            </div>
  
            <div class="flex items-center gap-2 text-xl text-txtPrimary-color font-light">
              <img src="@/assets/icons/cruise-page/clock.png" class="w-10 h-10 mt-[2px]" />
              <p>{{ item.duration }}</p>
            </div>
  
            <div class="flex items-center gap-2 text-xl text-txtPrimary-color font-light">
              <img src="@/assets/icons/cruise-page/diamond.png" class="w-10 h-10 mt-[2px]" />
              <p>{{ item.experience }}</p>
            </div>
  
            <button
              class="mt-2 border border-primary text-primary px-6 py-3 uppercase text-sm tracking-wide font-normal hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View Itinerary
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import sgGetawayImg from '@/assets/images/cruise-page/sg-getaway.png'
  import koreaJapanImg from '@/assets/images/cruise-page/korea-japan.png'
  import featuredCruiseImg from '@/assets/images/cruise-page/featured-cruise.png'
  
  const cruises = [
    {
      title: 'Singapore Getaways',
      image: sgGetawayImg,
      route: 'Singapore → Malaysia (Port Klang, Penang, Langkawi)',
      extraRoutes: '+2 More routes',
      duration: '3 Days',
      experience: 'Luxury Experience',
    },
    {
      title: 'Korea & Japan Cruises',
      image: koreaJapanImg,
      route: 'Incheon → Yeosu → Jeju',
      extraRoutes: '+2 More routes',
      duration: '3 Days',
      experience: 'Luxury Experience',
    },
    {
      title: 'Grand Asia Voyage',
      image: featuredCruiseImg,
      route: 'Singapore → Malaysia → Thailand → Vietnam → China → South Korea',
      extraRoutes: '+1 More routes',
      duration: '12 Days',
      experience: 'Luxury Experience',
    },
  ]
  </script>
  
  <style scoped>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>
  