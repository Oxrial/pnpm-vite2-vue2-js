<template>
  <router-view />
</template>
<script setup>
import { storeToRefs } from 'pinia'
import  { useBasicStore } from '@/store/basic'
import {onBeforeMount} from '@vue/composition-api'
import {settings} from storeToRefs(useBasicStore())
onBeforeMount(() => {
  if (!settings.value.isNeedLogin) useBasicStore().setToken(settings.value.tmpToken)
})
onMounted(() => {
  const { setTheme, theme, setSize, size, setLanguage, language } = useConfigStore()
  setTheme(theme)
  setSize(size)
  toggleHtmlClass(theme)
})
</script>
<style lang="scss">

</style>