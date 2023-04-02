import { defineStore } from 'pinia'
import { ref } from '@vue/composition-api'
export const useCounterStore = defineStore('count',() => {
  const token = ref('')
  const increment = (v) => {
      token.value = v
  }
return{
  token,increment
}
})
