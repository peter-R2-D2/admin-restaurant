import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'HomeAdmin',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
