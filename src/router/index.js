import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from "@/components/Header.vue"
import Random from "@/components/Random.vue"
import Testbody from "@/components/Testbody.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/2',
      name: 'Random',
      component: Random,
    },
    {
      path: '/8',
      name: 'TestNhanPham',
      component: Testbody,
    },

  ]
})
