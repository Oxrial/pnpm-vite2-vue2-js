<template>
  <router-view />
</template>
<script setup>
import { storeToRefs } from 'pinia'
import  { useBasicStore } from '@/store/basic'
import { useConfigStore } from '@/store/config'
import {onBeforeMount,onMounted} from '@vue/composition-api'
import { toggleHtmlClass } from '@/layout/theme/utils'

const { settings } = storeToRefs( useBasicStore())
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