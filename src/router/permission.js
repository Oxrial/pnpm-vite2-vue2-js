import router from '@/router'
import { filterAsyncRouter, progressClose, progressStart } from '@/hooks/use-permission'
import appStore from '@/store'
import { userInfoReq } from '@/api/user'
import settings from '../settings'

//路由进入前拦截
//to:将要进入的页面 vue-router4.0 不推荐使用next()
const whiteList = ['/login', '/404', '/401'] // no redirect whitelist
router.beforeEach(async (to,from,next) => {
  progressStart()
  document.title = to.meta?.title // i18 page title
  const basicStore = appStore.useBasicStore
  console.log('--->',basicStore)
  //not login
  if (!settings.isNeedLogin) {
    basicStore.setFilterAsyncRoutes([])
    return true
  }
  //1.判断token
  if (basicStore.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      //2.判断是否获取用户信息
      if (!basicStore.getUserInfo) {
        try {
          const userData = await userInfoReq()
          //3.动态路由权限筛选
          filterAsyncRouter(userData)
          //4.保存用户信息到store
          basicStore.setUserInfo(userData)
          //5.再次执行路由跳转
          return { ...to, replace: true }
        } catch (e) {
          console.error(`route permission error${e}`)
          basicStore.resetState()
          progressClose()
          next(`/login?redirect=${to.path}`)
        }
      } else {
        next()
      }
    }
  } else {
    if (!whiteList.includes(to.path)) {
      next(`/login?redirect=${to.path}`)
    } else {
      next()
    }
  }
})
//路由进入后拦截
router.afterEach((to,from) => {
  progressClose()
})
