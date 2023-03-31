<template>
  <Fragment>
    <template v-if="!item.hidden">
      <template v-if="showSidebarItem(item.children, item)">
        <Link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        {{ item }}
          <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
            <i :class="onlyOneChild.meta.icon || item.meta.icon"></i>
            <template #title>{{ onlyOneChild.meta?.title }}</template>
          </el-menu-item>
        </Link>
      </template>
      <el-sub-menu v-else :index="resolvePath(item.path)">
        <template v-if="item.meta" #title>
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <SidebarItem
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
        />
      </el-sub-menu>
    </template>
  </Fragment>
</template>

<script setup>
import { ref } from '@vue/composition-api'
import path from 'path'
import Link from './Link.vue'
import { isExternal } from '@/hooks/use-layout'

const props = defineProps({
  //每一个router Item
  item: {
    type: Object,
    required: true
  },
  //用于判断是不是子Item,设置响应的样式
  isNest: {
    type: Boolean,
    default: false
  },
  //基础路径，用于拼接
  basePath: {
    type: String,
    default: ''
  }
})
//显示sidebarItem 的情况
const onlyOneChild = ref()
const showSidebarItem = (children = [], parent) => {
  const showingChildren = children.filter((item) => {
    if (item.hidden) {
      return false
    } else {
      return true
    }
  })
  if (showingChildren.length === 1 && !parent?.alwaysShow) {
    onlyOneChild.value = showingChildren[0]
    return true
  }
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noChildren: true }
    return true
  }
  return false
}
const resolvePath = (routePath) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return path.resolve(props.basePath, routePath)
}
</script>
