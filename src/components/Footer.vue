<template>
    <footer class="bg-[#2A547A] text-white pt-16 ">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-x-36">
        <!-- Logo + Tagline -->
        <div class="md:col-span-5 space-y-6">
          <div class="flex items-center gap-2">
            <img :src="logoSrc" alt="Serenity Cruise Lines logo" class="h-8 md:h-8 w-auto" />
            <span class="text-[20px] md:text-[32px] font-cormorant font-semibold">Serenity Cruise Lines</span>
          </div>
          <p class="italic text-[16px] md:text-[20px] font-switzer">
            Timeless Journeys, Boundless Horizons.
          </p>
          <p class="text-[14px] md:text-[16px] text-[#E2E8F0] leading-relaxed font-switzer max-w-prose">
            Serenity Cruise Lines is an Asian-centric international cruise provider, soon to launch a range of curated cruise experiences.
          </p>
        </div>
  
        <!-- Headquarters Info -->
        <div class="md:col-span-4 space-y-6 text-[14px] md:text-[16px] font-switzer">
          <div>
            <p class="font-semibold mb-1">Headquarters</p>
            <p class="font-normal text-gray-300">1 Fullerton Road, Singapore</p>
            <p class="text-gray-300">Mon - Sun from 7:30 am - 09:30pm</p>
          </div>
          <div>
            <p class="font-semibold mb-1">Email</p>
            <p class="font-normal text-gray-300">info@serenitycruiselines.com</p>
          </div>
          <div>
            <p class="font-semibold mb-1">Phone</p>
            <p class="font-normal text-gray-300">+6568325501</p>
          </div>
        </div>
  
        <!-- Navigation Links -->
        <div class="md:col-span-3 space-y-4">
          <p class="uppercase text-sm tracking-widest text-gray-300 font-switzer">Navigation</p>
          <ul class="space-y-3 text-sm font-semibold font-switzer">
            <li><a href="/about" class="hover:underline">ABOUT US</a></li>
            <li><a href="/cruise" class="hover:underline">CRUISES</a></li>
            <li><a href="#" class="hover:underline">FLEET</a></li>
            <li><a href="#" class="hover:underline">DESTINATIONS</a></li>
            <li><a href="#" class="hover:underline">CAREERS</a></li>
            <li><a href="#" class="hover:underline">CONTACT</a></li>
          </ul>
        </div>
      </div>
  
      <!-- Bottom Bar -->
      <div class="mt-12 border-t border-gray-600 bg-[#1E425A] py-6 px-4">
        <div class="container mx-auto flex flex-col sm:flex-row justify-between items-left gap-4 text-[13px] sm:text-[14px] text-gray-300 font-switzer">
          <p class="text-left">© 2025 Serenity Cruise Lines</p>
          <div class="flex flex-wrap gap-4 md:justify-end ">
            <a href="#" class="hover:underline">Disclaimer</a>
            <span class=" inline">|</span>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <span class=" inline">|</span>
            <a href="#" class="hover:underline">Terms & Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import logoSrc from '@/assets/logo-serenity.svg'
  </script>
  