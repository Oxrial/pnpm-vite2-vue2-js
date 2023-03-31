import Vue from 'vue'
import App from './App.vue'
import CompositionApi, { createApp } from '@vue/composition-api'
import ElementUI from 'element-ui'
import { Plugin } from "vue-fragment"
import './store'
import { createPinia } from 'pinia'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import './assets/styles/index.scss'
import './layout/theme/index.scss'
import 'virtual:svg-icons-register'

const pinia = createPinia()

Vue.config.productionTip = false
Vue
  .use(CompositionApi)
  .use(Plugin)
  .use(ElementUI)
  .use(pinia)
import '@/router/permission'
const app = new Vue({
  router,
  render: (h) => h(App)
})
app.$mount('#app')

