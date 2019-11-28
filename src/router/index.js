import Vue from 'vue'
import Router from 'vue-router'

import Home from  '../components/home/Home'
import xq from  '../components/home/xq'
import xian from  '../components/home/Xian'

Vue.use(Router);
export default new Router({
  routes: [
    {path: '/',component:Home,},
    {path: '/Home',component:Home,},
    {path: '/xq',component:xq,},
    {path: '/xian',component:xian,},
  ]
})
