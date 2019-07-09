/*
入口js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import Header from 'components/Header/Header'
import Star from 'components/Star/Star'


Vue.component('Header',Header)
Vue.component('Star',Star)

 new Vue({
  el:'#app',
   render:h=>h(App),
  // component:{
  // App
  // },
  // template:'<App/>'
  router,
  store,
})
