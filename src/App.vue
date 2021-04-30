<template>
	<div class="app-wrapper">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"
						 :key="$route.name"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"
					 :key="$route.name"></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
});
</script>

<style lang="less" scoped>
.app-wrapper {
	height: 100%;
	width: 100%;
	overflow: hidden;
}
</style>
