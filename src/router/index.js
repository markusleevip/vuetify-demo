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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')    
  },
  {
    path: '/logon',
    name: 'Logon',
    component: () => import('../views/Logon.vue')
  }
  ,
  {
    path: '/my/resume',
    name: 'MyResume',
    component: () => import('../views/my/Resume.vue')
  }
  ,
  {
    path: '/show/resume',
    name: 'ShowResume',
    component: () => import('../views/my/ShowResume.vue')
  }
  ,
  {
    path: '/show/fans',
    name: 'ShowFans',
    component: () => import('../views/my/Fans.vue')
  }
  ,
  {
    path: '/show/follow',
    name: 'ShowFollow',
    component: () => import('../views/my/Follow.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
