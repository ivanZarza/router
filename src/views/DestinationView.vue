<script setup>
import { computed } from 'vue';
import sourceData from '@/data.json';
import ExperienceCard from '../components/ExperienceCard.vue';
import GoBack from '../components/GoBack.vue';

const props = defineProps({
  id: Number
})
// AQUI CREAMOS UNA CONSTANTE COMPUTADA PARA BUSCAR EL DESTINO QUE COINCIDA CON EL ID QUE RECIBIMOS POR PARAMETRO
const destination = computed(() => {
  return sourceData.destinations.find(destination => destination.id === props.id);
});
console.log(destination);

</script>

<template>
<div>
  <section>
    <h1> probando los parametros de las rutas {{ $route.params.id }}</h1>
    <div>
      <h1>{{ destination.name }}</h1>
      <GoBack/>
      <div class="destination-details">
        <img :src="`./images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </div>
  </section>
  <section class="experiences">
    <h2>Experiencias top en {{ destination.name }}</h2>
    <div class="cards">
      <RouterLink 
          v-for="experience in destination.experiences" 
          :key="experience.slug" 
          :to="{ name: 'experience', params: { id: destination.id, experienceSlug: experience.slug } }"
          >
        <ExperienceCard :experience="experience"/>
      </RouterLink>
    </div>
    <RouterView/> <!-- Podemos meter un routerview, dentro de un componente, para que se renderice el componente hijo-->
  </section>
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
