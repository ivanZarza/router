<script setup>
import { computed } from 'vue';
import sourceData from '@/data.json';
import { useRoute } from 'vue-router';

const route = useRoute();

const destinationId = computed(() => {
  return parseInt(route.params.id);
});
const destination = computed(() => {
  return sourceData.destinations.find(destination => destination.id === destinationId.value);
});
console.log(destination);
/* const destination = computed(() => {
  return sourceData.destinations.find(destination => destination.id === parseInt(route.params.id));
}); */

//Por que $route y no route 
</script>

<template>

<h1> probando los parametros de las rutas {{ $route.params.id }}</h1>

  <div>
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
