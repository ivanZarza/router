<script setup>
import sourceData from '@/data.json'

const destinations = sourceData.destinations


</script>


<template>
  <div id="nav">
    <RouterLink id="logo" to="/">INICIO</RouterLink>
    <RouterLink 
        v-for="destination in destinations" 
        :key="destination.id"
        :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
        >{{ destination.name }}
      </RouterLink>
      <RouterLink :to="{ name:'protected' }">Dashboard</RouterLink>
  </div>
</template>  