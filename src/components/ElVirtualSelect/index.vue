<template>
  <Fragment>
    <el-select
      v-if="innerOptions.length"
      ref="selectRef"
      :value="modelValue"
      placeholder="请选择"
      popper-class="virtual-select"
      filterable
      v-bind="$attrs"
      v-on="$listeners"
      @visible-change="handleVisibleChange"
    >
      <el-option
        v-for="item in optionsData"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
</Fragment>
</template>

<script>
import { cloneDeep, difference, remove } from 'lodash-es'
export default {
  name: '',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: { type: [String, Array], default: '' },
    options: { type: Array, default: () => {} },
    optionProps: {
      type: Object,
      default: () => {
        return {
          label: 'label',
          value: 'value'
        }
      }
    }
  },
  data() {
    return {
      innerOptions: [],
      optionsData: [],
      selectAttrs: {
        viewHeight: 220, // 可视区域的高度
        rowHeight: 20, // 当前行的默认高度
        startIndex: 0,
        endIndex: 0,
        callback: this.updateOptions,
        scrollView: null, // 滚动容器
        filterable: false
      }
    }
  },
  computed: {
    outOptions: {
      get() {
        return this.options || []
      }
    }
  },
  watch: {
    outOptions: {
      handler(n, v) {
        this.innerOptions = n
        this.$forceUpdate()
      },
      deep: true,
      immediate: true
    },
    innerOptions: {
      handler(n, o) {
        if (n.length) {
          this.$nextTick(() => {
            const vnode = this.$refs.selectRef
            const virtualSelect = document.querySelector('.virtual-select')
            const { $children: children } = vnode
            const selectDown = children[children.findIndex(c => c.$el === virtualSelect)]
            const [elScrollBar] = selectDown.$children
            const [wrap] = elScrollBar.$el.childNodes
            const scrollView = wrap.getElementsByClassName('el-scrollbar__view')[0]
            const total = n.length
            const { rowHeight, callback } = this.selectAttrs
            let { startIndex } = this.selectAttrs
            scrollView.style.height = `${total * rowHeight}px`
            let timer = false

            const ifn = () => {
              if (timer) {
                return
              }
              timer = true
              const requestld = setTimeout(() => {
                timer = false
                const scrollTop = wrap.scrollTop
                // 计算当前滚动位置，获取当前开始的起始位置
                const currentIndex = Math.floor(scrollTop / rowHeight)
                //根据滚动条获取当前索引与起始索引不相等时，将滚动的当前位置 设置为起始位置
                if (currentIndex !== startIndex) {
                  startIndex = Math.max(currentIndex, 0)
                }
                const paddingTop = `${startIndex * rowHeight}px`
                scrollView.style.paddingTop = paddingTop
                callback({ startIndex, scrollView })
              }, 100)
              if (!requestld) {
                clearTimeout(requestld)
              }
            }
            const fn = function () {
              ifn()
            }
            wrap.addEventListener('scroll', fn, false)
          })
        }
      }
    }
  },
  mounted() {},
  methods: {
    updateOptions({ startIndex, scrollView }) {
      this.selectAttrs.startIndex = startIndex
      this.selectAttrs.scrollView = scrollView
      this.renderOptions()
    },
    renderOptions() {
      let { selectAttrs: endIndex } = this
      const {
        selectAttrs: { viewHeight, rowHeight, startIndex },
        outOptions
      } = this
      const narr = difference(
        this.modelValue.sort((a, b) => a - b),
        outOptions.map(item => item[this.optionProps?.value]).sort((a, b) => a - b)
      )
      const newArr = []
      narr.forEach(n => {
        newArr.push({ [this.optionProps.label]: n, [this.optionProps.value]: n })
      })
      const outTemp = cloneDeep(this.outOptions)
      const selectedArr = remove(outTemp, o => this.modelValue.includes(o.value))
      this.innerOptions = [...newArr, ...selectedArr, ...outTemp]
      const total = this.innerOptions.length
      // 可视区域的条数
      const limit = Math.ceil(viewHeight / rowHeight)
      // 设置末位索引
      endIndex = Math.min(startIndex + limit, total)
      this.selectAttrs.endIndex = endIndex
      this.optionsData = this.innerOptions.slice(startIndex, endIndex)
    },
    handleVisibleChange(v) {
      const {
        selectAttrs: { scrollView }
      } = this
      // 当打开下拉框时，重置scrollView的paading Top,避免白屏
      if (scrollView) {
        scrollView.style.paddingTop = '0px'
      }
      if (v) this.renderOptions()
    }
  }
}
</script>
<style lang="scss" scoped></style>
<style lang="scss">
  .virtual-select {
    .el-scrollbar {
      .el-scrollbar_wrap {
        max-height: 300px;
      }
      .el-scrollbar__bar {
        &.is-vertical {
          .el-scrollbar__thumb {
            position: relative;
            &::before {
              position: absolute;
              width: 6px;
              margin-top: -3px;
              height: 20px;
              content: ' ';
              background: #d0d1d2;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
</style>