
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/PageHome.vue'),
        name: 'Home'
      },
      {
        path: '/about', component: () => import('pages/PageAbout.vue'),
        name: 'About'
      },
      {
        path: '/virtual', component: () => import('pages/PageVirtual.vue'),
        name: 'Virtual'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
