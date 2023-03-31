
import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
// const pinia = createPinia()
Vue
  .use(PiniaVuePlugin)
  .use(piniaPersist)
// export default pinia