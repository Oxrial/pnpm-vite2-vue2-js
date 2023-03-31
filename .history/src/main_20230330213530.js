import Vue from 'vue'
import App from './App.vue'
import CompositionApi,{ createApp, h } from '@vue/composition-api'
import ElementUI from 'element-ui'
import { Plugin } from "vue-fragment"
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import router from './router/index'

const pinia = createPinia()
pinia.use(piniaPersist)

Vue.config.productionTip = false
Vue
  .use(CompositionApi)
  .use(Plugin)
  .use(ElementUI)
  .use(PiniaVuePlugin)
  .use(piniaPersist)

import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import './assets/styles/index.scss'
import './layout/theme/index.scss'
import 'virtual:svg-icons-register'
import './permission'

const app = createApp({
  router,
  pinia,
  render: () => h(App),
})
app.use(pinia).use(router)
app.mount('#app')
