<!-- src/components/about/LeadershipTeam.vue -->
<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">
          Our Leadership Team
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.id" class="team-member">
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-full h-64 object-cover rounded-lg mb-4"
            >
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const team = [
    {
      id: 1,
      name: 'Alex Smith',
      role: 'Chief Executive Officer',
      image: '/src/assets/images/team/ceo.jpg'
    },
    {
      id: 2,
      name: 'Chef Michael',
      role: 'Head of Culinary',
      image: '/src/assets/images/team/chef.jpg'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Guest Experience Director',
      image: '/src/assets/images/team/director.jpg'
    }
  ]
  </script>