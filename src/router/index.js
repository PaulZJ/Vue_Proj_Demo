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
import city from '@/components/city/city'
import msite from '@/components/msite/msite'
import shop from '@/components/shop/shop'
import foodDetail from '@/components/shop/children/foodDetail'
import shopDetail from '@/components/shop/children/shopDetail'
import shopSafe from '@/components/shop/children/children/shopSafe'
import search from '@/components/search/search'
import order from '@/components/order/order'
import orderDetail from '@/components/order/children/orderDetail'
import confirmOrder from '@/components/confirmOrder/confirmOrder'
import remark from '@/components/confirmOrder/children/inner/remark'
import payment from '@/components/confirmOrder/children/inner/payment'
import userValidation from '@/components/confirmOrder/children/inner/userValidation'
import invoice from '@/components/confirmOrder/children/inner/invoice'
import chooseAddress from '@/components/confirmOrder/children/inner/chooseAddress'
import addAddress from '@/components/confirmOrder/children/inner/children/addAddress'
import searchAddress from '@/components/confirmOrder/children/inner/children/children/searchAddress'
import benefit from '@/components/benefit/benefit'
import commend from '@/components/benefit/children/commend'
import coupon from '@/components/benefit/children/coupon'
import exchange from '@/components/benefit/children/exchange'
import hbDescription from '@/components/benefit/children/hbDescription'
import hbHistory from '@/components/benefit/children/hbHistory'
import point from '@/components/point/point'
import pointDetail from '@/components/point/children/detail'
import vipcard from '@/components/vipcard/vipcard'
import useCard from '@/components/vipcard/children/useCard'
import invoiceRecord from '@/components/vipcard/children/invoiceRecord'
import vipDescription from '@/components/vipcard/children/vipDescription'
import food from '@/components/food/food'
import balance from '@/components/balance/balance'
import balanceDetail from '@/components/balance/children/detail'
import service from '@/components/service/service'
import questionDetail from '@/components/service/children/questionDetail'
import download from '@/components/download/download'

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
          path: '/city/:cityid',
          component: city
        },
        {
          path: 'msite',
          component: msite,
          meta: {keepAlive: true}
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
        },
        {
          path: '/shop',
          component: shop,
          children: [{
            path: 'foodDetail',
            component: foodDetail
          },
          {
            path: 'shopDetail',
            component: shopDetail,
            children: [{
              path: 'shopSafe',
              component: shopSafe
            }]
          }]
        },
        {
          path: '/search/:geohash',
          component: search
        },
        {
          path: '/order',
          component: order,
          children: [{
            path: 'orderDetail',
            component: orderDetail
          }]
        },
        {
          path: '/confirmOrder',
          component: confirmOrder,
          children: [{
            path: 'remark',
            component: remark
          },
          {
            path: 'invoice',
            component: invoice
          },
          {
            path: 'payment',
            component: payment
          },
          {
            path: 'userValidation',
            component: userValidation
          },
          {
            path: 'chooseAddress',
            component: chooseAddress,
            children: [{
              path: 'addAddress',
              component: addAddress,
              children: [{
                path: 'searchAddress',
                component: searchAddress
              }]
            }]
          }]
        },
        {
          path: '/benefit',
          component: benefit,
          children: [{
            path: 'coupon',
            component: coupon
          },
          {
            path: 'hbDescription',
            component: hbDescription
          },
          {
            path: 'hbHistory',
            component: hbHistory
          },
          {
            path: 'exchange',
            component: exchange
          },
          {
            path: 'commend',
            component: commend
          }]
        },
        {
          path: '/points',
          component: point,
          children: [{
            path: 'detail',
            component: pointDetail
          }]
        },
        {
          path: '/vipcard',
          component: vipcard,
          children: [{
            path: 'invoiceRecord',
            component: invoiceRecord
          },
          {
            path: 'useCart',
            component: useCard
          },
          {
            path: 'vipDescription',
            component: vipDescription
          }]
        },
        {
          path: '/food',
          component: food
        },
        {
          path: '/balance',
          component: balance,
          children: [{
            path: 'detail',
            component: balanceDetail
          }]
        },
        {
          path: '/service',
          component: service,
          children: [{
            path: 'questionDetail',
            component: questionDetail
          }]
        },
        {
          path: '/download',
          component: download
        }
      ]
    }
  ]
})
