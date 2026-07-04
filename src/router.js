import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects.vue')
    },
    {
      path: '/project/:id/:urlSlug',
      name: 'project',
      component: () => import('@/views/Project.vue')
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: () => import('@/views/Quotes.vue')
    },
    {
      path: '/quote/:id/:urlSlug',
      name: 'quote',
      component: () => import('@/views/Quote.vue')
    },
    {
      path: '/poems',
      name: 'poems',
      component: () => import('@/views/Poems.vue')
    },
    {
      path: '/poem/:id/:urlSlug',
      name: 'poem',
      component: () => import('@/views/Poem.vue')
    },
    {
      path: '/hire-Hasil',
      name: 'hire-hasil',
      component: () => import('@/views/HireHasil.vue')
    },
    {
      path: '/performance-analysis',
      redirect: {
        name: 'project',
        params: { id: 11, urlSlug: 'electrical-device-performance-tracker-analyser-realtime' }
      }
    },
    {
      // Real 404 view (no redirect-to-home: that was a soft-404 for crawlers).
      // The prerenderer snapshots this route as dist/404.html, which Cloudflare
      // Pages serves with a true 404 status for any unknown URL.
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
