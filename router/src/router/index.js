import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination',
      component: () => import('../views/DestinationView.vue'),
      props: (route) => ({ id: parseInt(route.params.id) }) // dentro de las props se puede hacer un parseo de los valores mediante un objeto a diferentes props,
                                                            //  asi como asignar una funcion para modificar alguna props en especifico
    }
  ]
})

export default router
