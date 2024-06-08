import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/views/DefaultLayout.vue'

import ComponentView from '@/views/componentViews/ComponentView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/standardViews/HomeView.vue')
      }
    ]
  },
  {
    path: '/components',
    component: ComponentView,
    children: [
      {
        path: 'game-settings',
        name: 'Game Settings',
        component: () => import('@/components/interface/GameSettings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
