import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Notas from '../views/Notas.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    name: 'Notas',
    path: '/notas',
    component: Notas
    //component: () => import(/* webpackChunkName: "about" */ '../views/Notas.vue')
  }
]

const router = new VueRouter({mode: 'history', base: process.env.BASE_URL,routes:routes})

export default router
