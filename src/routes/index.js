import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Searchpage from '../components/Search-page/Search-page.vue'
import region from '../pages/Classify/Rightlist/Rightlist.vue'
import Login from '../components/Login/Login.vue'
import Register from '../pages/Personal/Register/Register.vue'

export default [
  {path:'/home',component:Home,meta:{isShow:true}},
  {path:'/classify',component:Classify,
    meta:{isShow:true},
    children:[
      {path:'/classify/region',component:region,meta:{isShow:true}},
      {path:'',redirect: '/classify/region'}
    ]
  },
  {path:'/topic',component:Topic,meta:{isShow:true}},
  {path:'/cart',component:Cart,meta:{isShow:true}},
  {path:'/personal',component:Personal,
    children:[
      {path:'/personal/login',component:Login},
      {path:'/personal/Register',component:Register}
    ]
  },
  {path:'/search',component:Searchpage,},
  //默认当前路由 页面
  {
    path: '/',
    redirect: '/home'
  }
]
