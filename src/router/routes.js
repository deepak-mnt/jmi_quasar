
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      // { path: '', component: () => import('pages/index') },
      { path: '/test_jmi', component: () => import('pages/test_jmi') },
      { path: '/find', component: () => import('pages/find') },
      { path: '/pick-up', component: () => import('pages/pick-up') },
      { path: '/drop', component: () => import('pages/drop') },
      { path: '/map', component: () => import('pages/map') },
      { path: '/open-moves', component: () => import('pages/open-moves') },
      { path: '/add-items', component: () => import('pages/add-items') },
      { path: '/audit', component: () => import('pages/audit') },
      { path: '', component: () => import('pages/login') },
      { path: '/login', component: () => import('pages/login') },
      { path: '/reports', component: () => import('pages/reports') },
      { path: '/sync-lists', component: () => import('pages/sync-lists') },
      { path: '/item', component: () => import('pages/item') },
      { path: '/users', component: () => import('pages/users') },
      { path: '/setup', component: () => import('pages/setup') },
      { path: '/server-functions', component: () => import('pages/server-functions') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
