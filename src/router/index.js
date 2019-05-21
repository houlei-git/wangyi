/**
 * Created by Samsung on 2019/5/5.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from '../routes'
Vue.use(VueRouter)

const router=new VueRouter({
  mode:'history',
  routes,
  linkActiveClass:'active'
})
export default router
