<template>
  <div class=" bg-white">
    <!-- Hero Section -->
    <AboutBanner />

    <!-- Mission & Vision -->
    <MissionVision />

    <!-- Leadership Team -->
    <LeadershipTeam />

    <!-- Service Highlights -->
    <ServiceHighlights />

    <!-- CTA Section -->
    <section class="py-16 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <img src="@/assets/icons/anchor.svg" alt="Anchor" class="w-12 h-12 mx-auto mb-6">
        <h2 class="text-3xl font-bold mb-6">Join Us on This Journey</h2>
        <p class="mb-8 max-w-2xl mx-auto">
          Discover the world's most beautiful destinations with Serenity Cruise Lines.
        </p>
        <BaseButton variant="white" size="lg">
          Book Now
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AboutBanner from '@/components/about/AboutBanner.vue'
import MissionVision from '@/components/about/MissionVision.vue'
import LeadershipTeam from '@/components/about/LeadershipTeam.vue'
import ServiceHighlights from '@/components/about/ServiceHighlights.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>