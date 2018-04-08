import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'
import Routes from './router/index'
import {store} from './store'
import VueProgressiveImage from 'vue-progressive-image'
import * as firebase from 'firebase'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
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
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB2BufxTeUagpzCL9j7fRYEza0UxSmrQSA',
      authDomain: 'milan-petrovic.firebaseapp.com',
      databaseURL: 'https://milan-petrovic.firebaseio.com',
      projectId: 'milan-petrovic',
      storageBucket: 'milan-petrovic.appspot.com'
    })
  }
})
