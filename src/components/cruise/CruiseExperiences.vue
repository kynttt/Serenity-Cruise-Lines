<template>
    <section class="py-8 bg-white text-txtPrimary-color font-switzer">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="mb-12">
          <p class="text-sm md:text-2xl tracking-wide uppercase font-light">04</p>
          <h2 class="text-sm md:text-2xl font-light mb-4">Serenity Cruise Experiences</h2>
          <hr class="border-gray-300 md:my-12" />
        </div>
  
        <!-- Scrollable Cards -->
        <div class="overflow-x-auto ">
          <div class="flex md:gap-12 gap-6 w-max">
            <div
              v-for="(item, index) in experiences"
              :key="index"
              class="flex-shrink-0 w-[200px]  md:w-[400px] bg-white rounded-md "
            >
              <!-- Image -->
              <div class="relative border border-gray-300 px-4 pt-8 pb-2 md:px-8 md:pt-10">
                <img
                  :src="item.icon"
                  :alt="item.title"
                  class="w-[220px] h-[183px] md:w-[382px] md:h-[317px] object-contain mx-auto"
                />
              </div>
  
              <!-- Title & Description -->
              <div class=" space-y-3 md:space-y-4 py-4 md:py-8">
                <h3 class="text-base md:text-3xl font-cormorant font-semibold">
                  {{ item.title }}
                </h3>
                <p class="text-sm md:text-lg font-light leading-relaxed text-txtPrimary-color">
                  {{ item.description }}
                </p>
              </div>
  
              <!-- Includes -->
              <div class="bg-[#E6F4FF] border border-[#B8E5FF] text-[#062E4B] font-light text-sm md:text-lg px-4 md:px-6 py-4 space-y-2">
                <h4 class="font-normal">Includes</h4>
                <ul class="list-disc list-inside">
                  <li v-for="(point, i) in item.includes" :key="i">{{ point }}</li>
                </ul>
              </div>
  
              <!-- Button -->
              <div class=" py-4">
                <button
                  class="w-full md:py-[24px] py-2 border border-gray-300 text-primary uppercase text-sm md:text-xl tracking-wide font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import luxIcon from '@/assets/images/cruise-page/excursion1.png'
  import blissIcon from '@/assets/images/cruise-page/excursion2.png'
  import questIcon from '@/assets/images/cruise-page/excursion3.png'
  import vibeIcon from '@/assets/images/cruise-page/excursion1.png'
  
  const experiences = [
    {
      title: 'Serenity Lux – Luxury at Sea',
      description:
        'For those seeking the finest accommodations, exclusive excursions, and world-class service.',
      icon: luxIcon,
      includes: [
        'Private suites and VIP lounges',
        'Fine dining curated by top chefs',
        'Exclusive access to private excursions',
      ],
    },
    {
      title: 'Serenity Bliss – Family-Friendly Fun',
      description:
        'Designed for multi-generational travel, with entertainment for guests of all ages.',
      icon: blissIcon,
      includes: [
        'Kids’ clubs and teen lounges',
        'Family-friendly activities and entertainment',
        'Special dining options for all ages',
      ],
    },
    {
      title: 'Serenity Quest – Adventure & Exploration',
      description:
        'Tailored for thrill-seekers and explorers, with a focus on eco-tourism and cultural immersion.',
      icon: questIcon,
      includes: [
        'Expedition-style cruises to remote destinations',
        'Wildlife encounters, diving, and adventure activities',
        'Enrichment programs with expert guides',
      ],
    },
    {
      title: 'Serenity Vibe – Adults Only',
      description:
        'Vibrant, energetic cruises designed for adult guests seeking fun, nightlife, and social spaces.',
      icon: vibeIcon,
      includes: [
        'Live music and nightlife venues',
        'Beach clubs and adults-only excursions',
        'Casual dining options and bars',
      ],
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
  