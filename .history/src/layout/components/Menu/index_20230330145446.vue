<template>
<Fragment>
	<div class="logo-main">
		<transition name="logoTransition" :appear="true">
			<el-image
				v-if="!isCollapse"
				:src="logo"
				fit="contain"
				class="project-logo"
			/>
			<el-image v-else :src="logo2" fit="contain" class="project-logo" />
		</transition>
	</div>
	<el-scrollbar class="submenu-main">
		<el-menu
			router
			:collapse="isCollapse"
			:default-active="defaultActive"
			:background-color="scss.aside_theme"
			text-color="#fefefea6"
			class="el-menu-vertical-demo"
		>
			<sub-menu :menu-data="routes" />
		</el-menu>
	</el-scrollbar>
</Fragment>
</template>

<script setup>
import {computed,ref} from '@vue/composition-api'
import logo from '@/assets/images/logo-cool.jpg'
import logo2 from '@/assets/images/logo.png'
import subMenu from './Submenu/index.vue'
import { useRouter, useRoute } from '@/router/index'
// import { routesObj } from '@/router'
import scss from '@/assets/styles/style.module.scss'

const props = defineProps({
	isCollapse: {
		type: Boolean,
		default: false
	}
})
const $routes = useRouter()
const routes = computed(() => {
	return $routes.options.routes
})

const $route = useRoute()
const route = computed(() => {
	return $route
})
const defaultActive = ref(route.value.path)
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
