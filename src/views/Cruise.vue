<template>
    <div class="container mx-auto px-4 py-8">
      <header class="mb-12">
        <h1 class="text-4xl font-bold text-center mb-6">Cruise Destinations</h1>
      </header>
      <section>
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <!-- Example Cruise Card -->
          <div class="bg-white rounded shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Cruise Destination"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-2xl font-semibold mb-2">Caribbean Delight</h2>
              <p class="text-gray-700 text-base">
                Explore the beauty of crystal-clear waters and vibrant culture.
              </p>
              <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </div>
          <!-- Add more cards as needed -->
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Cruise'
  })
  </script>
  
  <style scoped>
  /* Add any page-specific styles if needed */
  </style>
  