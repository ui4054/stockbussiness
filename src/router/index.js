import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',   //son las rutas para que me deja ir a otra pestaña 
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
      component: () => import('../views/About.vue')
  },
  { 
    path: '/registro',
    name: 'Registro',
      component: () => import('../components/Registro.vue')
  },
  { 
    path: '/comprar',
    name: 'Comprar',
      component: () => import('../components/Comprar.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
