<template>
  <Fragment>
    <SuspensionBall @ball-click="drawer = true" />
    <component :is="loadComponents[renderComponentKey]" />
    <el-drawer
      title=""
      class="render-drawer"
      :visible.sync="drawer"
      :with-header="false"
      :modal="false"
      direction="ttb"
      size="20%"
    >
      <el-radio-group
        v-model="renderComponentKey"
        style="display: inline-flex; flex-direction: column;"
        @input="change"
      >
        <el-radio
          v-for="(value, key) in loadComponents"
          :key="'radio_' + key"
          :label="key"
          border
          :style="{
            margin: '20px 20px 0',
            'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.12),0 0 6px 0 rgba(0,0,0,0.04)'
          }"
        >
          {{ key }}
        </el-radio>
      </el-radio-group>
    </el-drawer>
  </Fragment>
</template>

<script setup name="ShowDrawer">
import { ref } from '@vue/composition-api'
import { camelCase, upperFirst } from 'lodash-es'
function importAll(r) {
  const cache = {}
  Object.keys(r).forEach(
    key => (cache[upperFirst(camelCase(key.replace(/(.*\/)*([^.]+).*/gi, '$2')))] = r[key].default)
  )
  return cache
}
const loadComponents = importAll(import.meta.globEager('./modules/*.vue'))
import SuspensionBall from './components/SuspensionBall.vue'
import Storage from '@/hooks/storage'

const drawer = ref(false)
const renderComponentKey = Storage.get('test_render_component') || Object.keys(loadComponents)[0]
const change = v => {
  Storage.set('test_render_component', v)
  drawer.value = false
}
</script>
<style lang="scss" scoped>
  .render-drawer ::v-deep {
    .el-drawer {
      background-color: #ffffffe3 !important;
      .el-drawer__body {
        text-align: center;
      }
      .el-radio {
        background-color: #fff;
      }
    }
  }
</style>