import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)

export const constantRoutes = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect')
  //     }
  //   ]
  // },

  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'Dashboard', elSvgIcon: 'Fold', affix: true }
      }
    ]
  },
  // {
  //   path: '/RBAC',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.jzfai.top/low-code-platform/#/permission-center/user-table-query',
  //       meta: { title: 'RBAC', icon: 'skill' }
  //     }
  //   ]
  // },
  // {
  //   path: '/setting-switch',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/setting-switch/index.vue'),
  //       name: 'SettingSwitch',
  //       meta: { title: 'Setting Switch', icon: 'example' }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   meta: { title: 'Error Log', icon: 'eye' },
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'error-log',
  //       component: () => import('@/views/error-log/index.vue'),
  //       name: 'ErrorLog',
  //       meta: { title: 'Error Index' }
  //     },
  //     {
  //       path: 'error-generator',
  //       component: () => import('@/views/error-log/error-generator.vue'),
  //       name: 'ErrorGenerator',
  //       meta: { title: 'Error Generator' }
  //     }
  //   ]
  // },
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index.vue'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index.vue'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  // basicDemo
]

//角色和code数组动态路由
export const roleCodeRoutes = [
  // {
  //   path: '/roles-codes',
  //   component: Layout,
  //   redirect: '/roles-codes/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/roles-codes/index.vue'),
  //       name: 'RolesCodes',
  //       meta: { title: 'Permission Switch' }
  //     },
  //     {
  //       path: 'roleIndex',
  //       component: () => import('@/views/roles-codes/role-index.vue'),
  //       name: 'RoleIndex',
  //       meta: { title: 'Role Index', roles: ['admin'] }
  //     },
  //     {
  //       path: 'code-index',
  //       component: () => import('@/views/roles-codes/code-index.vue'),
  //       name: 'CodeIndex',
  //       meta: { title: 'Code Index', code: 16 }
  //     },
  //     {
  //       path: 'button-permission',
  //       component: () => import('@/views/roles-codes/button-permission.vue'),
  //       name: 'ButtonPermission',
  //       meta: { title: 'Button Permission' }
  //     }
  //   ]
  // }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '/:catchAll(.*)', name: 'CatchAll', redirect: '/404', hidden: true }
]

export const createRouter = (routes) => new Router({
  mode: 'hash',
  scrollBehavior: () => ({ top: 0 }),
  routes
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router
