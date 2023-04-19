<template>
  <Fragment>
    <ElVirtualSelect
      v-model="modelValue"
      multiple
      allow-create
      default-first-option
      collapse-tags
      :options="options"
    ></ElVirtualSelect>
  </Fragment>
</template>

<script setup name="ElVirtualSelectDemo">
import { ref } from '@vue/composition-api'
import ElVirtualSelect from '@/components/ElVirtualSelect/index.vue'
const options = Array.from({ length: 1000 }).map((i, index) => ({
  label: 'Label' + index,
  value: 'Value' + index
}))
const modelValue = ref([])
</script>
<style lang="scss" scoped></style>