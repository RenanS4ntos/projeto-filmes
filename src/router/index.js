import { createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import People from '../pages/People.vue'

const routes = [
  { path: '/', name: 'home', component: Home, alias: '/movies' },
  { path: '/series', name: 'series', component: Home },
  { path: '/people', name: 'people', component: People },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
