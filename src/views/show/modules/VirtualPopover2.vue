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

<script>
export default {
  data() {
    return {
      customLabelPopShow: false,
      referenceDom: {},
      popContents: [],
      tags: [
        { label: 'A', tags: ['A', 'D', 'C'] },
        { label: 'B', tags: ['F', 'B', 'C'] }
      ]
    }
  },
  methods: {
    customLabelPopTrigger(value, e) {
      this.$refs.popRef?.doClose()
      this.customLabelPopShow = false
      this.referenceDom = e.target
      this.$nextTick(() => {
        console.dir(this.referenceDom);
        this.customLabelPopShow = true
        this.$nextTick(() => {
          this.popContents = []
          value.forEach(item => this.popContents.push({ is: 'ElTag', value: item}))
          this.$refs.popRef?.doShow()
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>