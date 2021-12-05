import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to) => {
//   const params = ['all', 'active', 'completed']
//   if (params.every((param) => param !== to.params.filter)) return '/all'
// })

export default router
