


const routes = [
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/LoginPage.vue') }],
  },

  {
    path: '/dashboard',
    component: () => import('src/pages/DashboardPage.vue'),
  },
]

export default routes
