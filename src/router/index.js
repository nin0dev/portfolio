import { createRouter, createWebHistory } from 'vue-router'
import ReflexProdProjectView from '@/views/ReflexProdProjectView.vue'
import FictionalProductProjectView from '@/views/FictionalProductProjectView.vue'
import Home from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects/reflexprod-crm',
      name: 'project-reflexprod-crm',
      component: ReflexProdProjectView,
    },
    {
      path: '/projects/fictional-product-showcase',
      name: 'project-fictional-product-showcase',
      component: FictionalProductProjectView,
    },
  ],
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
