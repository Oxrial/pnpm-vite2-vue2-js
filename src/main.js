import Vue from 'vue'
import App from './App.vue'
import CompositionApi, { createApp } from '@vue/composition-api'
import ElementUI from 'element-ui'
import { Plugin } from "vue-fragment"
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persist'
import { registerStore } from '@/store'
import router from './router'
import '@/router/permission'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import './assets/styles/index.scss'
import './layout/theme/index.scss'
import 'virtual:svg-icons-register'

Vue.config.productionTip = false
Vue
  .use(CompositionApi)
  .use(Plugin)
  .use(ElementUI)
  .use(PiniaVuePlugin)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
  
const app = createApp({
  router,
  render: (h) => h(App)
})
app.use(pinia)
registerStore()
app.mount('#app')

