import Vue from 'vue'
import VueRouter from 'vue-router'
// import Header from "@/components/Header.vue"
import Random from "@/components/Random.vue"


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Header',
    //   component: Header
    // },
    {
      path: '/',
      name: 'Random',
      component: Random,
    },
  ]
})
