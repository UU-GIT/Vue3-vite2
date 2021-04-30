<template>
	<svg :class="svgClass"
		 v-bind="$attrs"
		 :style="{color: color}">
		<use :xlink:href="iconName" />
	</svg>
</template>

<script setup lang="ts">
/* eslint-disable no-unused-vars */
import { defineProps, computed } from 'vue';

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '',
	},
});
const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
	if (props.name) {
		return `svg-icon ${props.name}`;
	}
	return 'svg-icon';
});
</script>

<style lang='less'>
.svg-icon {
	width: 10px;
	height: 10px;
	fill: currentColor;
	vertical-align: middle;
}
</style>
