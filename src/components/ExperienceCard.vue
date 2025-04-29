<script setup>

defineProps({
  experience: Object
})

</script>


<template>
  <div class="card">
    <img :src="`./images/${experience.image}`" :alt="experience.name">
    <span class="card_text">
      {{ experience.name }}
    </span>
  </div>
</template>