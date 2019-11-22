import Vue from 'vue'
import Router from 'vue-router'
import Login from '../../src/components/my/login'
import home from "../../src/foooter/foter1"
import merchant from "../../src/foooter/foter2"
import order from "../../src/foooter/foter3"
import my from "../../src/foooter/foter4"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/merchant',
      component:merchant
    },
    {
      path:'/order',
      component:order
    },
    {
      path:'/my',
      component:my
    }
  ]
})
