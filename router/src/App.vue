<script setup>
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <header>
    <TheNavigation />
  </header>
  <div class="container">
<!--     Para que aparezca la barra lateral, hay que añadir el componente LeftSidebar a la vista principal
    pasandole el nombre sel componente dentro de name, emulamos un <slot></slot> -->
    <RouterView class="view left-sidebar" name="LeftSidebar" />
    <!-- AQUI CREAMOS UN ROUTERVIEW,Y LE PASAMOS UN SLOT PARA QUE SE RENDERICE EL COMPONENTE HIJO QUE COINCIDA CON LA RUTA,Y ASI PODER NAVEGAR ENTRE RUTAS -->
    <RouterView v-slot="{ Component: RouteComponent }" class="main-view" >
      <!-- AQUI CREAMOS UNA TRANSICION PARA QUE LOS COMPONENTES SEAN MAS SUAVES -->
      <Transition name="fade" mode="out-in" >
<!--    AQUI CREAMOS UN COMPONENTE QUE SE RENDERIZARA DEPENDIENDO DE LA RUTA, Y LE PASAMOS LA RUTA COMO KEY,
        TAMBIEN LE PASAMOS UN SLOT PARA QUE SE RENDERICE EL COMPONENTE HIJO QUE COINCIDA CON LA RUTA,Y ASI ACTIVARA LA TRANSICION
        ROUTERVIEW PASA SU FUNCION A COMPONENT Y EN ESTE, SE PUEDE ACTIVAR LA TRANSICION, DENTRO DEL COMPONENTE QUE SE VE, DEBE ESTAR TODO EL CONTENIDO EN UN DIV -->
        <component :is="RouteComponent" :key="$route.path" /><!-- AQUI PASAMOS LA RUTA COMO KEY,ASI CONSEGUIMOS QUE SE VUELVA A RENDERIZAR LA VISTA CUANDO CAMBIE LA RUTA -->
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}

</style>

