<script setup>
import { computed } from 'vue';
import sourceData from '@/data.json';
import ExperienceCard from '@/components/ExperienceCard.vue';
/* import { useRoute } from 'vue-router';

const route = useRoute(); */

const props = defineProps({
  id: Number
})

const destination = computed(() => {
  return sourceData.destinations.find(destination => destination.id === props.id);//explicar esto
});
console.log(destination);
/* const destination = computed(() => {
  return sourceData.destinations.find(destination => destination.id === parseInt(route.params.id));
}); */

//Por que $route y no route 
</script>

<template>
  <section>
    <h1> probando los parametros de las rutas {{ $route.params.id }}</h1>
    <div>
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </div>
  </section>
  <section class="experiences">
    <h2>Experiencias top en {{ destination.name }}</h2>
    <div class="cards">
      <ExperienceCard 
        v-for="experience in destination.experience" 
        :key="destination.slug" 
        :experience="experience"
      />
    </div>
  </section>
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
