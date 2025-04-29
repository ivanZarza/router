<script setup>
  import sourceData from '@/data.json'
  import { computed } from 'vue';

const props = defineProps({
  id: Number,
  experienceSlug: String
})

const destination = computed(() => {
  return sourceData.destinations.find(destination => destination.id === props.id);
});
const experience = computed(() => {
  return destination.value.experiences.find(experience => experience.slug === props.experienceSlug);
});

</script>

<template>

  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`./images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>


</template>