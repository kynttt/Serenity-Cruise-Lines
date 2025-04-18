<template>
  <div>
    <CruiseHero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CruiseHero from '@/components/cruise/CruiseHero.vue'

export default defineComponent({
  name: 'Cruise',
  components: {
    CruiseHero
  }
})
</script>

<style scoped>
/* Add any page-specific styles if needed */
</style>
