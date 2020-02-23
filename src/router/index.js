import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adapt',
    name: 'adapt',
    component: () => import('../views/adapt.vue')
  },
  {
    path: '/onepx',
    name: 'onepx',
    component: () => import('../views/one-px.vue')
  },
  {
    path: '/proxy',
    name: 'proxy',
    component: () => import('../views/dev-proxy.vue')
  },
  {
    path: '/template',
    name: 'template',
    component: () => import('../views/default-temp.vue')
  },
  {
    path: '/usefulcomp',
    name: 'usefulcomp',
    component: () => import('../views/useful-comp.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
