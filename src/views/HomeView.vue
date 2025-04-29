<script setup>
import sourceData from '@/data.json'
import { RouterLink } from 'vue-router';

const destinations = sourceData.destinations



</script>

<template>
  <div class="home" >
    <p>Todos los destinos</p>
    <div class="destinations">
      <RouterLink 
        v-for="destination in destinations" 
        :key="destination.id"
        :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
        >
        <h1>{{destination.name}}</h1>
        <img :src="`./images/${destination.image}`" :alt="destination.name">
      </RouterLink>
    </div>
  </div>
</template>
