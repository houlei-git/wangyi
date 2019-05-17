import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'

export default [
  {path:'/home',component:Home},
  {path:'/classify',component:Classify},
  {path:'/topic',component:Topic},
  {path:'/cart',component:Cart},
  {path:'/personal',component:Personal},
  //默认当前路由 页面
  {
    path: '/',
    redirect: '/home'
  }
]
