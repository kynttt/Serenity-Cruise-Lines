<template>
  <div class=" bg-white">
    <!-- Hero Section -->
    <AboutBanner />

    <!-- Mission & Vision -->
    <MissionVision />

    <!-- Leadership Team -->
    <LeadershipTeam />

    <!-- Join Journey CTA -->
    <JoinJourney />

    <!-- Footer-->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import AboutBanner from '@/components/about/AboutBanner.vue'
import MissionVision from '@/components/about/MissionVision.vue'
import LeadershipTeam from '@/components/about/LeadershipTeam.vue'
import JoinJourney from '@/components/about/JoinJourney.vue'
import Footer from '@/components/Footer.vue'
</script>