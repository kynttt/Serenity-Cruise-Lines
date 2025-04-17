<template>
    <section class="w-full min-h-screen bg-white">
      <!-- Banner / Hero Section -->
      <div class="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-8">
        <!-- Text Content -->
        <div class="md:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to Serenity Cruise Lines
          </h1>
          <p class="text-gray-600 mb-6">
            Serenity Cruise Lines is redefining the cruise experience, blending luxury with adventure.
          </p>
          <p class="text-gray-600 mb-8">
            Our fleet offers unparalleled comfort and exploration across breathtaking destinations.
          </p>
          <button class="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            READ MORE ABOUT US
          </button>
        </div>
        <!-- Hero Image -->
        <div class="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Cruise Ship Banner"
            class="w-full h-auto object-cover rounded shadow-md"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'AboutUs'
  })
  </script>
  
  <style scoped>
  /* Add any page-specific styles if needed */
  </style>
  