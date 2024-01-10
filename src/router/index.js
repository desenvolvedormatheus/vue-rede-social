import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/feed',
    name: 'feed',
    component: () => import('../views/feedView.vue')
  },
  {
    path: '/notLogin',
    name: 'notLogin',
    component: () => import('../views/notLoginView.vue')
  },
  {
    path: '/Error',
    name: 'Error',
    component: () => import('../views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router