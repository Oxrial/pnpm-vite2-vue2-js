<template>
  <Fragment>
    <el-popover
      v-if="customLabelPopShow"
      ref="popRef"
      placement="right"
      trigger="click"
      :reference="referenceDom"
    >
      <template v-for="(item, index) in popContents">
        <component :is="item.is" :key="index" v-bind="item.attrs">{{ item.value }}</component>
        <br :key="'br_' + index" />
      </template>
    </el-popover>
    <el-tag
      v-for="(tag, index) in tags"
      class="tag-show"
      :key="index"
      @click="customLabelPopTrigger(tag.tags, $event)"
      >{{ tag.label }}</el-tag
    >
  </Fragment>
</template>

<script setup>
import { reactive, ref, nextTick } from '@vue/composition-api'
const tags = reactive([
  { label: 'A', tags: ['A', 'D', 'C'] },
  { label: 'B', tags: ['F', 'B', 'C'] }
])
const customLabelPopShow = ref(false)

let referenceDom = {}

const popContents = ref([])

const popRef = ref(null)

const customLabelPopTrigger = (value, e) => {
  console.log(popRef.value);
  popRef.value?.doClose()
  customLabelPopShow.value = false
  referenceDom = e.target
  nextTick(() => {
    customLabelPopShow.value = true
    nextTick(() => {
      popContents.value = []
      value.forEach(item => popContents.value.push({ is: 'ElTag', value: item}))
      console.log(popRef.value);
      popRef.value?.doShow()
    })
  })
}
</script>
<style lang="scss" scoped></style>