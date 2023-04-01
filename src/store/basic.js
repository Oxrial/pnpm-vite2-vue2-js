import { ref, reactive, nextTick } from '@vue/composition-api'
import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import router, { constantRoutes } from '@/router'
import { storeToRefs } from 'pinia'
export const useBasicStore = defineStore('basic', () => {
	const token = ref('')
	const getUserInfo = ref(false)
	const userInfo = reactive({ username: '', avatar: '' })
	//router
	const allRoutes = reactive([])
	const buttonCodes = reactive([])
	const filterAsyncRoutes = reactive([])
	const roles = reactive([])
	const codes = reactive([])
	//keep-alive
	const cachedViews = reactive([])
	const cachedViewsDeep = reactive([])
	//other
	const sidebar = reactive({ opened: true })
	//axios req collection
	const axiosPromiseArr = reactive([])
	const settings = reactive(defaultSettings)

	function remotePromiseArrByReqUrl(reqUrl) {
		this.$patch((state) => {
			state.axiosPromiseArr.forEach((fItem, index) => {
				if (fItem.url === reqUrl) {
					state.axiosPromiseArr.splice(index, 1)
				}
			})
		})
	}
	function setToken(data) {
    token.value = data
    console.log(token);
	}
	function setFilterAsyncRoutes(routes) {
		this.$patch((state) => {
			state.filterAsyncRoutes = routes
			// console.log('setFilterAsyncRoutes ',routes);
			state.allRoutes = constantRoutes.concat(routes)
		})
	}
	function setUserInfo({ userInfo, roles, codes }) {
		const { username, avatar } = userInfo
		this.$patch((state) => {
			state.roles = roles
			state.codes = codes
			state.getUserInfo = true
			state.userInfo.username = username
			state.userInfo.avatar = avatar
		})
	}
	function resetState() {
		this.$patch((state) => {
			state.token = '' //reset token
			state.roles = []
			state.codes = []
			//reset router
			state.allRoutes = []
			state.buttonCodes = []
			state.filterAsyncRoutes = []
			//reset userInfo
			state.userInfo.username = ''
			state.userInfo.avatar = ''
		})
		this.getUserInfo = false
	}
	function resetStateAndToLogin() {
		this.resetState()
		nextTick(() => {
			router.push({ path: '/login' })
		})
	}
	function setSidebarOpen(data) {
		this.$patch((state) => {
			state.sidebar.opened = data
		})
	}
	function setToggleSideBar() {
		this.$patch((state) => {
			state.sidebar.opened = !state.sidebar.opened
		})
	}

	/*keepAlive缓存*/
	function addCachedView(view) {
		this.$patch((state) => {
			if (state.cachedViews.includes(view)) return
			state.cachedViews.push(view)
		})
	}

	function delCachedView(view) {
		this.$patch((state) => {
			const index = state.cachedViews.indexOf(view)
			index > -1 && state.cachedViews.splice(index, 1)
		})
	}
	/*third  keepAlive*/
	function addCachedViewDeep(view) {
		this.$patch((state) => {
			if (state.cachedViewsDeep.includes(view)) return
			state.cachedViewsDeep.push(view)
		})
	}
	function delCacheViewDeep(view) {
		this.$patch((state) => {
			const index = state.cachedViewsDeep.indexOf(view)
			index > -1 && state.cachedViewsDeep.splice(index, 1)
		})
	}
	const persist = reactive({
		storage: localStorage,
		paths: ['token']
	})
  return {
token,getUserInfo,userInfo,
      //router
      allRoutes,
      buttonCodes,
      filterAsyncRoutes,
      roles,
      codes,
      //keep-alive
      cachedViews,
      cachedViewsDeep,
      //other
      sidebar,
      //axios req collection
      axiosPromiseArr,
      settings,
      persist,
      remotePromiseArrByReqUrl,
      setToken,
      setFilterAsyncRoutes,
      setUserInfo,
      resetState,
      resetStateAndToLogin,
      setSidebarOpen,
      setToggleSideBar,
      addCachedView,
      delCachedView,
      addCachedViewDeep,
      delCacheViewDeep
  }
})
