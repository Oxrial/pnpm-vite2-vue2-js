<template>
  <Fragment>
    <div class="nav-info">
        <i :class="`el-icon-s-${isCollapse?'unfold':'fold'} collpase-btn`" @click="clickCollapse"></i>
      <BreadCrumb :matched="route.matched"></BreadCrumb>
    </div>
    <Avatar />
  </Fragment>
</template>

<script setup>
import {computed} from '@vue/composition-api'
import {useRoute} from 'vue2-helpers/vue-router'
import BreadCrumb from './Breadcrumb/index.vue'
import Avatar from './Avatar/index.vue'
const props = defineProps({
	isCollapse: {
		type: Boolean,
		default: false
	}
})
const $route = useRoute()
const route = computed(() => {
	return $route
})
const emits = defineEmits(['update:isCollapse'])
const clickCollapse = () => {
	emits('update:isCollapse', !props.isCollapse)
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
