<template>
  <router-view />
</template>
<script setup>
import { storeToRefs } from 'pinia'
import  { useBasicStore } from '@/store/basic'
import { useConfigStore } from '@/store/config'
import {onBeforeMount} from '@vue/composition-api'
import {settings} from storeToRefs(useBasicStore())
import { toggleHtmlClass } from '@/layout/theme/utils'
onBeforeMount(() => {
  if (!settings.value.isNeedLogin) useBasicStore().setToken(settings.value.tmpToken)
})
onMounted(() => {
  const { setTheme, theme, setSize, size } = useConfigStore()
  setTheme(theme)
  setSize(size)
  toggleHtmlClass(theme)
})
</script>
<style lang="scss">

</style>