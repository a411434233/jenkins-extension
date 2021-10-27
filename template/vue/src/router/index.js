import Vue from 'vue'
import VueRouter from 'vue-router'
import autoRouter from '../automatically/router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout/index'),
    redirect: '/home', // 默认展示页面
    meta: { title: '首页', icon: 'example' },
    children: [autoRouter[0]]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/layout/index'),
    meta: { title: '首页', icon: 'example' },
    children: [{
      path:'/',
      component: () => import('../views/home/index'),
    }],
  },
  {
    path: '/callback',
    name: 'callback',
    meta: { title: '认证' },
    component: ()=> import('../views/callback/index')
  },
  {
    path: '/slienceAuth',
    name: 'slienceAuth',
    meta: {title: '静默授权'},
    component: () => import("../views/slienceAuth/index")
  }
]

const router = new VueRouter({
  routes
})

export default router
