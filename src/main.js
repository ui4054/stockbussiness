import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

const routes = [
  {
      name: 'Ventas',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'Administracion',
      path: '/prod',
      component: CreateComponent
  },
  {
      name: 'Inventario',
      path: '/invent',
      component: IndexComponent
  },
  {
      name: 'Usuarios',
      path: '/users',
      component: EditComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');