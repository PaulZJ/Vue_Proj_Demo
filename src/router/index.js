import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PaulZJ from '@/components/zj'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PaulZJ',
      component: PaulZJ
    }
  ]
})
