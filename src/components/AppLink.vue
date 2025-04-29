<!-- Este componente es un wrapper para los links de vue-router,
  y sirve para renderizar links internos y externos, 
  si el link es externo se renderiza un <a> en caso contrario se renderiza un <RouterLink> -->
<script setup>
//Hay que importar el RouterLink de vue-router
import { RouterLink } from 'vue-router'
//Hay que importar computed de vue
import { computed } from 'vue'

//Definimos las propiedades del componente que son las mismas que las de RouterLink 
//para que se puedan pasar al componente como props y se puedan usar en el RouterLink interno
//Asi conseguimos tener todas las herramientas de RouterLink en nuestro componente
const props = defineProps({
  ...RouterLink.props,
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