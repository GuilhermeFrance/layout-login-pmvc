const routes = [

  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/LoginPage.vue') }],
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('src/pages/DashboardPage.vue'),
    meta: {requiresAuth: true}
  },
]

export default routes
