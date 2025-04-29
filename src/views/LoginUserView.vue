
<script setup>
import { ref } from 'vue'
import {  useRouter,useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

function login() {
  // Extraemos el nombre de usuario de la ventana global (donde guardamos el valor pasado por el usuario al input ) 
  //y lo asignamos a la variable username
  window.user = { username: username.value }
  // Extraemos la ruta de redirección de la ruta actual y la asignamos a la variable redirectPath
  const redirectPath = route.query.redirect
  // Redirigimos al usuario a la ruta de redirección o a la ruta protegida
  router.push( redirectPath  || { name: 'protected' })
}

</script>

<template>

<form class="login" @submit.prevent="login" >
  <h1>Login</h1>
  <label for="username">Username</label>
  <input v-model="username" type="text" name="username" class="input">
  <label for="password">Password</label>
  <input v-model="password" type="text" name="password" class="input">
  <button class="btn">Login</button>
</form>
  
</template>