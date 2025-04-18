<template>
  <div>
    <CruiseHero />
    <FeaturedCruise />
    <CruiseCategories />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CruiseHero from '@/components/cruise/CruiseHero.vue'
import FeaturedCruise from '@/components/cruise/FeaturedCruise.vue'
import CruiseCategories from '@/components/cruise/CruiseCategories.vue'
export default defineComponent({
  name: 'Cruise',
  components: {
    CruiseHero, FeaturedCruise, CruiseCategories
  }
})
</script>

<style scoped>
/* Add any page-specific styles if needed */
</style>
