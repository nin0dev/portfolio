import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ReflexProdProjectView from '@/views/ReflexProdProjectView.vue'
import FictionalProductProjectView from '@/views/FictionalProductProjectView.vue'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
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
})

export default router
