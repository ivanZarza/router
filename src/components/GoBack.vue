

<script setup>
//AQUI CREAMOS UN COMPONENTE PARA IR ATARS EN EL ROUTER
//AQUI IMPORTAMOS EL HOOK useRouter
import { useRouter } from 'vue-router'
//AQUI CREAMOS UNA CONSTANTE PARA USAR EL HOOK
const router = useRouter()
//AQUI CREAMOS UNA FUNCION PARA IR ATRAS
const goBack = () => {
  router.back()
}


</script>

<template>
  <span class="go-back">
    <!-- AQUI CREAMOS UN BOTON PARA IR ATRAS Y LE ASIGNAMOS LA FUNCION QUE CREAMOS -->
    <button @click="goBack">Go back</button>
  </span>  
</template>