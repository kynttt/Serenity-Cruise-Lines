<template>
  <div>
    <CruiseHero />
    <FeaturedCruise />
    <CruiseCategories />
    <AdventureCruise />
    <CruiseExperiences />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CruiseHero from '@/components/cruise/CruiseHero.vue'
import FeaturedCruise from '@/components/cruise/FeaturedCruise.vue'
import CruiseCategories from '@/components/cruise/CruiseCategories.vue'
import AdventureCruise from '@/components/cruise/AdventureCruise.vue'
import CruiseExperiences from '@/components/cruise/CruiseExperiences.vue'
export default defineComponent({
  name: 'Cruise',
  components: {
    CruiseHero, FeaturedCruise, CruiseCategories, AdventureCruise, CruiseExperiences
  }
})
</script>

<style scoped>
/* Add any page-specific styles if needed */
</style>
