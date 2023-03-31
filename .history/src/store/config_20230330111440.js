import { defineStore } from 'pinia'
import settings from '@/settings'
import { toggleHtmlClass } from '@/layout/theme/utils'
export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      theme: settings.defaultTheme,
      size: settings.defaultSize
    }
  },
  persist: {
    storage: localStorage,
    paths: ['theme', 'size']
  },
  actions: {
    setTheme(data) {
      this.theme = data
      toggleHtmlClass(data)
    },
    setSize(data) {
      this.size = data
    }
  }
})
