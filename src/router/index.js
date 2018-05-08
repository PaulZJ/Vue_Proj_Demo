import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '../App'
import PaulZJ from '@/components/zj'
import login from '@/components/login/login'
import profile from '@/components/profile/profile'
import info from '@/components/profile/children/info'
import address from '@/components/profile/children/children/address'
import setusername from '@/components/profile/children/children/setusername'
import add from '@/components/profile/children/children/children/add'
import addDetail from '@/components/profile/children/children/children/children/addDetail'
import forget from '@/components/forget/forget'

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
        },
        {
          path: '/profile',
          component: profile,
          children: [{
            path: 'info',
            component: info,
            children: [{
              path: 'address',
              component: address,
              children: [{
                path: 'add',
                component: add,
                children: [{
                  path: 'addDetail',
                  component: addDetail
                }]
              }]
            },
            {
              path: 'setusername',
              component: setusername
            }]
          }]
        },
        {
          path: '/forget',
          component: forget
        }
      ]
    }
  ]
})
