import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ServicesMarketing from '../pages/ServicesMarketing/ServicesMarketing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/servicesmarketing'
    },
    {
      path: '/servicesmarketing',
      name: 'ServicesMarketing',
      component: ServicesMarketing
    }
  ]
})
