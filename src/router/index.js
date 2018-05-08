import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '../App'
import PaulZJ from '@/components/zj'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: PaulZJ
        },
        {
          path: '/login',
          component: login
        }
      ]
    }
  ]
})
