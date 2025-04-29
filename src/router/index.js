import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SourceData from '../data.json'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      //se puede agregar un alias a una ruta, para que se renderice en la misma ruta
      alias: '/home'
    },
    {
      path: '/protected',
      name: 'protected',
      //se pueden renderizar varios componentes en una misma ruta,
      //en este caso se renderiza el componente por defecto y el componente LeftSidebar
      //se pueden renderizar componentes dinamicos, que se renderizan solo si se usan en la vista
      //en este caso se renderiza el componente LeftSidebar solo si se usa en la vista,
      //Es importante que la clave que incorporamos en el routerview (LeftSidebar), en el componente App.vue 
      //sea igual al nombre de la propiedad que le pasamos al objeto component
      components: {
        default: () => import('../views/ProtectedView.vue'),
        LeftSidebar: () => import('../components/LeftSidebar.vue')
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',  
      name: 'login',
      component: () => import('../views/LoginUserView.vue')
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: {
        default: () => import('../views/InvoicesPageView.vue'),
        LeftSidebar: () => import('../components/LeftSidebar.vue')
      },
      //meta se usa para proteger rutas, se puede agregar cualquier propiedad al objeto meta
      //en este caso se agrega la propiedad requiresAuth con el valor true
      //se puede acceder a las propiedades de meta en la vista destino, mediante el objeto $route
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination',
      component: () => import('../views/DestinationView.vue'),
      // props: true si se coloca true, se pasaran todas las props de la ruta a la vista destino como props del componente destino
      // props: { id: 1, name: 'destination' }  se pueden pasar props estaticas a la vista destino
      //dentro de las props se puede hacer un parseo de los valores mediante un objeto a diferentes props,asi como asignar una funcion para modificar alguna props en especifico
      props: (route) => ({id: parseInt(route.params.id) }),
      //beforeEnter se ejecuta antes de que se renderice la ruta, se puede usar para validar si la ruta es correcta, si no lo es, se puede redirigir a otra ruta
      //se pueden pasar las rutas de origen y destino como parametros de la funcion con to y from, para validar si la ruta es correcta
      //creamos la constante exists, que busca en el array de destinos si existe el destino con el id que se pasa como parametro
      //si la constante exists no existe, se redirige a la ruta /not-found
      beforeEnter: (to, from) => {
        const exists = SourceData.destinations.find(
          destination => destination.id === parseInt(to.params.id)
        )
        if (!exists) return {
          //se redirige a la ruta not-found, se le pasan los parametros de la ruta origen, para que se puedan usar en la vista not-found
          name: 'not-found',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        }
      },
      // se pueden agregar rutas hijas a una ruta padre para que se rendericen en el mismo componente                                                      
      // en este caso se renderiza el componente DestinationView y se le pasan las props de la ruta padre
      //a la hora de escribir el path, solo se escribe el nombre de la ruta hija, ya que el path de la ruta padre se concatenara con el de la ruta hija
      children: [                                            
        {                                                    
          path: ':experienceSlug',                            
          name: 'experience',                                 
          component: () => import('../views/ExperincesShowView.vue'),
          //se pueden pasar las props de la ruta padre a la hija, ademas de las props de la ruta hija
          //en este caso se pasan las props de la ruta padre y se agrega la prop experienceSlug, con el spred operator se pasan todas las props de la ruta padre
          //y se agrega la prop experienceSlug, y se pasa anumerico el id
          props: (route) => ({...route.params, id: parseInt(route.params.id),}) 
        }
      ]                                                      
    },
    /* { ESTA SERIA LA RUTA QUE PASO A SER LA RUTA HIJA DE LA RUTA DESTINATION
      path: '/destination/:id/:slug/:experienceSlug',  
      name: 'experience',
      component: () => import('../views/ExperincesShowView.vue'),
      props: (route) => ({...route.params, id: parseInt(route.params.id),})
    } */
    {
      //esta ruta se renderizara en caso de que no se encuentre ninguna ruta, se puede colocar cualquier nombre en el path
      path: '/:pathMatch(.*)*', 
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    },

  ],
      //se puede hacer un scroll a una posicion especifica al cambiar de ruta,en este caso se hace scroll al inicio de la pagina
      //mediante la funcion scrollBehavior, se le pasan los parametros to, from y savedPosition
      //mediante un objeto,con los parametros{ top: null, left: null} se hace scroll a la posicion elegida 
      //y con {behavior: null} se elige el comportamiento del scroll
      //savedPosition guarda la posicion anterior del scroll, y se puede usar para hacer scroll a la posicion anterior
 /*  scrollBehavior(to, from, savedPosition) {
    // Ya que la pagina tiene una transicion de 300ms,por medio de una promesa con un setTimeout,
    // se espera, para que la transicion termine y se haga el scroll
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, left: 0, behavior:'smooth'  })
      }, 5000)
    })
  } */
})

//se ejecuta antes de que se renderice la ruta, se puede usar para validar si el usuario esta autenticado
//se puede acceder a las propiedades de la ruta, mediante el objeto $route

router.beforeEach((to, from) => {
  //se valida si la ruta destino tiene la propiedad requiresAuth, si la tiene, se valida si el usuario esta autenticado
  //en este caso se valida si el usuario esta autenticado, si no lo esta, se redirige a la ruta /login
  if (to.meta.requiresAuth && !window.user) {
    return {
      name: 'login',
      //se redirige a la ruta login, se le pasa como parametro la ruta destino, para que despues de logearse, se redirija a la ruta destino
      query: { redirect: to.fullPath }

    }
  }
})


export default router
