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
      props: (route) => ({id: parseInt(route.params.id) }), // dentro de las props se puede hacer un parseo de los valores mediante un objeto a diferentes props,
                                                            //  asi como asignar una funcion para modificar alguna props en especifico
      children: [                                            // se pueden agregar rutas hijas a una ruta padre para que se rendericen en el mismo componente
        {                                                    // en este caso se renderiza el componente DestinationView y se le pasan las props de la ruta padre
          path: ':experienceSlug',                            //a la hora de escribir el path, solo se escribe el nombre de la ruta hija, 
          name: 'experience',                                 //ya que el path de la ruta padre se concatenara con el de la ruta hija
          component: () => import('../views/ExperincesShowView.vue'),
          props: (route) => ({...route.params, id: parseInt(route.params.id),}) //se pueden pasar las props de la ruta padre a la hija
        }
      ]                                                      
    },
    /* { ESTA SERIA LA RUTA QUE PASO A SER LA RUTA HIJA DE LA RUTA DESTINATION
      path: '/destination/:id/:slug/:experienceSlug',  
      name: 'experience',
      component: () => import('../views/ExperincesShowView.vue'),
      props: (route) => ({...route.params, id: parseInt(route.params.id),})
    } */
  ]
})

export default router
