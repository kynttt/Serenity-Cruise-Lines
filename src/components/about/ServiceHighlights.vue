<!-- src/components/about/ServiceHighlights.vue -->
<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">
          Service Highlights
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="highlight in highlights" :key="highlight.id" 
               class="p-6 bg-blue-50 rounded-lg text-center">
            <div class="text-blue-600 mb-4 flex justify-center">
              <component :is="highlight.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ highlight.title }}</h3>
            <p class="text-gray-600">{{ highlight.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const highlights = [
    {
      id: 1,
      title: 'Luxury Accommodations',
      description: 'Experience unparalleled comfort in our meticulously designed suites',
      icon: 'HomeIcon'
    },
    {
      id: 2,
      title: 'World-Class Dining',
      description: 'Savor exceptional cuisine prepared by renowned chefs',
      icon: 'UtensilsIcon'
    },
    {
      id: 3,
      title: 'Premium Service',
      description: 'Enjoy personalized attention from our dedicated crew',
      icon: 'StarIcon'
    }
  ]
  </script>