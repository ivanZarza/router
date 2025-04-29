import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//importamos el componente AppLink para poder usarlo en la aplicacion
import AppLink from './components/AppLink.vue'

const app = createApp(App)
//registramos el componente AppLink para poder usarlo en la aplicacion
app.component('AppLink', AppLink)
app.use(router)

app.mount('#app')
