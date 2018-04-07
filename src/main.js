import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'
import Routes from './router/index'
import {store} from './store'
import VueProgressiveImage from 'vue-progressive-image'

Vue.use(VueProgressiveImage)
Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes,
  mode:'history'
})





const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
