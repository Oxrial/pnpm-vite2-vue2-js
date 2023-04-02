<template>
  <i  v-if="meta?.elSvgIcon" class="el-svg-icon" :class="meta.elSvgIcon"/>
  <svg-icon v-else-if="meta?.icon" :icon-class="meta?.icon" class="nav-icon" />
</template>

<script setup lang="ts">
defineProps({
  meta: { type: Object, default: null }
})
</script>

<style scoped lang="scss">
.el-svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  right: 3px;
  font-size: var(--sidebar-el-icon-size);
  text-align: left !important;
}
</style>
