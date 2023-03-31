<template>
  <router-view />
</template>
<script setup>
import {onBeforeMount} from '@vue/composition-api'
onBeforeMount(() => {
  if (!settings.value.isNeedLogin) useBasicStore().setToken(settings.value.tmpToken)
})
</script>
<style lang="scss">

</style>