import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Glazes from '../views/Glazes.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/glazes',
    name: 'glazes',
    component: Glazes,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
