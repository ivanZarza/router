
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
// Definimos una función logout que borra el usuario de la ventana global y redirige al usuario a la página de inicio
function logout () {
  //Pasar el valor de la variable user a null para que no haya usuario
  window.user = null
  //Redirigir al usuario a la página de inicio con la query logout y valor null para omitir el simbolo = en la url
  router.push({ name: 'home', query: { logout: null }})
}
//Si usamos replace en lugar de push, no se guardará el historial de navegación y no podremos volver a la página anterior
// router.replace({ name: 'home', query: { logout: null }})


</script>