import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
// codigo insertado de prueba de miguel
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

// fin de codigo metido por miguel 3-10-2021

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//AGREGAMOS La URL base de nuestra API
//axios.defaults.baseURL = 'http://localhost:3000/api'; - modificado por mjiguel en comentario a ver que pasa


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


