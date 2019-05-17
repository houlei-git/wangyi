// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible/flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mock-server'
// import './validate'

Vue.config.productionTip = false

//注册全局组件


new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store,
  template: '<App />'
})
