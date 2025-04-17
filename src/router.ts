import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutUs from './views/AboutUs.vue'
import Cruise from './views/Cruise.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/cruise', name: 'Cruise', component: Cruise },
  // ...other routes if any
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
