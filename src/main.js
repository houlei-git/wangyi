// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible/flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mock-server'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/lazy.gif'

//全局组件
import Search from './components/Search/Search.vue'
import Searchpage from './components/Search-page/Search-page.vue'


Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading
})
//注册全局组件
Vue.component('Search', Search)
Vue.component('Searchpage', Searchpage)


new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store,
  Search,
  template: '<App />'
})
