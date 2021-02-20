import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/store'
  },
  {
    path: '/ebook',
    component: () => import('../views/ebook'),
    children: [{
      path: ':filename',
      component: () => import('../components/ebook/EbookReader.vue')
    }]
  },
  {
    path: '/store',
    component: () => import('../views/store'),
    redirect: '/store/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/store/StoreHome.vue')
        // meta: { key: 1 }
      },
      {
        path: 'detail',
        component: () => import('../views/store/Detail.vue')
        // meta: { key: 2 }
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
