<script setup>
import sourceData from '@/data.json'
import AppLink from './AppLink.vue';

const destinations = sourceData.destinations


</script>


<template>
<!--   <div id="nav">
    <RouterLink id="logo" to="/">INICIO</RouterLink>
    <RouterLink 
        v-for="destination in destinations" 
        :key="destination.id"
        :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
        >{{ destination.name }}
      </RouterLink>
      <RouterLink :to="{ name:'protected' }">Dashboard</RouterLink>
  </div> -->
  <div id="nav">
    <AppLink id="logo" to="/">INICIO</AppLink>
    <AppLink 
        v-for="destination in destinations" 
        :key="destination.id"
        :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
        >{{ destination.name }}
      </AppLink>
      <AppLink :to="{ name:'protected' }">Dashboard</AppLink>
      <AppLink to="https://vueschool.io">Vue School</AppLink>
  </div>


</template>  