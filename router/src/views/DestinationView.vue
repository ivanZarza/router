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
  return sourceData.destinations.find(destination => destination.id === parseInt($route.params.id));
}); */
</script>

<template>

<h1> probando los parametros de las rutas{{ $route.params.id }}</h1>

  <div>
    <h1>{{ destination.name }}</h1>
    <img :src="`/images/${destination.image}`" :alt="destination.name">

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
