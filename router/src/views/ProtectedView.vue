
<template>

  <div>
    <h1>Bienvenido {{  username }}</h1>
    <button @click="logout" >Logout</button>
    <RouterLink :to="{ name: 'invoices' }">
    <button>Invoices</button>
    </RouterLink>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
// Extraemos el nombre de usuario de la ventana global (donde guardamos el valor pasado por el usuario al input ) y lo asignamos a la variable username

const router = useRouter()
const username = window.user.username 

function logout () {
  window.user = null
  router.push({ name: 'home' })
}

</script>