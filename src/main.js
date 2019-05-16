// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'
// import './validate'

Vue.config.productionTip = false

//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)

new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})
