import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import('../views/AuthorView.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('../views/post/_id.vue')
  },
  {
    path: '/author/:id',
    name: 'author',
    component: () => import ('../views/author/_id.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  if(from.name){
    document.documentElement.scrollTop = 0

    store.dispatch('CloseMenu')
  }
})

export default router
