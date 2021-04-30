<template>
	<div class="home-header">
		<div v-if="showReturn"
			 class="back-up"
			 @click="backUp">
			<svg-icon name="back-white"
					  class="svg-icon"></svg-icon>
		</div>
		<div class="input-box">
			<input type="text"
				   class="header-input"
				   placeholder="搜索"
				   @keypress="getInputVal($event)"
				   v-model="inputVal">
			<svg-icon v-if="inputVal"
					  name="delete-white"
					  @click="deleteInputTxt"
					  class="svg-icon"></svg-icon>
		</div>
		<div class="right-btns">
			<svg-icon v-if="showSearchIcon"
					  name="ic_sy_search"
					  @click="inputSearch"
					  class="svg-icon">
			</svg-icon>
			<slot v-else
				  name="rightInfo"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { defineProps, reactive } from 'vue';
// import { useRouter } from 'vue-router';
// const router = useRouter();
// const props = defineProps({
// 	showReturn: {
// 		type: Boolean,
// 		required: false,
// 	},
// 	showSearchIcon: {
// 		type: Boolean,
// 		default: true,
// 	},
// });

// const state = reactive({
// 	inputVal: '',
// });

// const backUp = () => {
// 	router.go(-1);
// }

// const getInputVal = (event: any) => {
// 	if (event.keyCode === 13) {
// 		this.inputSearch();
// 	}
// }

// const deleteInputTxt = () => {
// 	state.inputVal = '';
// 	this.inputSearch();
// }
// export default class SearchHeader extends Vue {
// 	@Emit()
// 	private inputSearch() {
// 		return this.inputVal;
// 	}

// 	private backUp() {
// 		this.$router.go(-1);
// 	}

// 	private getInputVal(event: any) {
// 		if (event.keyCode === 13) {
// 			this.inputSearch();
// 		}
// 	}

// 	private deleteInputTxt() {
// 		this.inputVal = '';
// 		this.inputSearch();
// 	}
// }
</script>
<style lang="less" scoped>
@pt: 100/375vw;
.home-header {
	display: flex;
	align-items: center;
	position: relative;
	width: 100%;
	height: 44 * @pt;
	z-index: 99;
	padding: 6 * @pt 16 * @pt;
	background: transparent;

	.back-up {
		width: 36 * @pt;
		display: flex;
		align-items: center;
		justify-content: left;
		.ui-icon-back-white {
			height: 18 * @pt;
			width: 18 * @pt;
		}
	}
	.input-box {
		width: 90%;
		height: 100%;
		position: relative;
		.header-input {
			width: 100%;
			height: 100%;
			border: none;
			outline: none;
			line-height: 32 * @pt;
			background: rgba(255, 255, 255, 0.3);
			border-radius: 16 * @pt;
			margin-right: 10 * @pt;
			padding: 0 30 * @pt 0 10 * @pt;
			font-size: 12 * @pt;
			color: #fff;
			&::-webkit-input-placeholder {
				color: #bad1fb;
			}
		}
		.ui-icon-delete-white {
			position: absolute;
			right: 10 * @pt;
			top: 8 * @pt;
			height: 16 * @pt;
			width: 16 * @pt;
		}
	}
	.right-btns {
		width: 40 * @pt;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.ui-icon-ic_sy_search {
			width: 24 * @pt;
			height: 24 * @pt;
		}
	}
}
</style>