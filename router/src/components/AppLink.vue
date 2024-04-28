<!-- Este componente es un wrapper para los links de vue-router,
  y sirve para renderizar links internos y externos, 
  si el link es externo se renderiza un <a> en caso contrario se renderiza un <RouterLink> -->
<script setup>
//Hay que importar el RouterLink de vue-router
import { RouterLink } from 'vue-router'
//Hay que importar computed de vue
import { computed } from 'vue'

//Definimos las props del componente AppLink que son obligatorias y de tipo string u objeto
//Estas props son el destino del link que se va a renderizar en el componente AppLink, y es el to de RouterLink
//si es un string se considera un link externo por que pasa la url completa,
//si es un objeto se considera un link interno y se pasa el objeto con la ruta
const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  }
})

//Definimos una variable computada que nos dice si el link es externo o no
const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})

</script>

<template>
  <!-- Si el link es externo se renderiza un <a> en caso contrario se renderiza un <RouterLink> -->
  <!-- hay que poner slot para que se renderice el contenido del componente -->
  <a v-if="isExternal" :href="to"><slot/></a> 
  <RouterLink v-else :to="to" class="link">
    <slot/>
  </RouterLink>
</template>