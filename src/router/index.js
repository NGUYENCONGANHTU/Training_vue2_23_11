import Vue from 'vue'
import VueRouter from 'vue-router'
import CountPage from '@/pages/count/index.vue'
import Clock from '@/components/Clock'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CountPage',
      component: CountPage
    },
    {
      path: '/bt2',
      name: 'BaiTap2',
      component: Clock
    }
  ]
})
