import Vue from 'vue'
import App from './App.vue'
import CompositionApi,{ createApp, h } from '@vue/composition-api'
import ElementUI from 'element-ui'
import { Plugin } from "vue-fragment"
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import './assets/styles/index.scss'
import './layout/theme/index.scss'
import 'virtual:svg-icons-register'

Vue
  .use(PiniaVuePlugin)
  .use(piniaPersist)
  .use(CompositionApi)
  .use(Plugin)
  .use(ElementUI)
const pinia = createPinia()


Vue.config.productionTip = false
const app = createApp({
  router,
  pinia,
  render: (h) => h(App)
})
app.mount('#app')
import './permission'