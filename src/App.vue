<template>
  <Fragment>
    <router-view />
  </Fragment>
</template>
<script setup name="App">
import {onBeforeMount,onMounted} from '@vue/composition-api'
import  appStore  from '@/store'
import { toggleHtmlClass } from '@/layout/theme/utils'

// const { settings } = appStore.useBasicStore
onBeforeMount(() => {
  if (!appStore.useBasicStore.settings.isNeedLogin){ 
    appStore.useBasicStore.setToken(appStore.useBasicStore.settings.tmpToken)
  }
})
onMounted(() => {
  const { setTheme, theme, setSize, size } = appStore.useConfigStore
  setTheme(theme)
  setSize(size)
  toggleHtmlClass(theme)
})
</script>
<style lang="scss">
html,body{
  background: #ddd;
}
</style>