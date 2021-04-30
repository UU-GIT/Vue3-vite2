<template>
	<div class="bus-tab-page">
		<section>
			<div class="bus-tab-container">
				<keep-alive>
					<component :is="currentMenu[tabIndex].component" />
				</keep-alive>
			</div>
		</section>

		<footer>
			<van-tabbar v-model="currentName"
						@change="onChange">
				<van-tabbar-item v-for="(item,index) in items"
								 :key="index">
					<span>{{item.label}}</span>
					<template #icon="">
						<svg-icon :name="getIcon(item,item.$index)"
								  class="svg-icon"></svg-icon>
					</template>
				</van-tabbar-item>
			</van-tabbar>
		</footer>
	</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue';

import { Tabbar, TabbarItem, Toast } from 'vant';
import { useStore } from 'vuex';
import homePage from './home/index.vue';
import appHousePage from './appHouse/index.vue';
import useTab from './userTab/index.vue';
import { MeunType } from '../typings/public.d';

export default defineComponent({
	name: 'wyapp-index',
	components: {
		[Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem,
	},

	setup() {
		const store = useStore();
		const state = reactive({
			tabIndex: 0,
			currentName: 0,
			currentMenu: [
				{ name: 0, icon: ['teb_souye_selected', 'teb_souye_normal'], label: '首页', component: homePage },
				{ name: 1, icon: ['teb_yingyong_selected', 'teb_yingyong_normal'], label: '测试中心', component: appHousePage },
				{ name: 2, icon: ['teb_wode_selected', 'teb_wode_normal'], label: '我的', component: useTab },
			],
		});

		const items = computed(() => state.currentMenu.map((e) => ({
			name: e.name,
			icon: e.icon,
			label: e.label,
		})));

		const getIcon = computed(() => (item: MeunType) => {
			const { icon, name } = item;
			if (!Array.isArray(icon)) return icon;
			const [a, b] = icon;
			let iconC = b;
			if (state.currentName === name) {
				iconC = a;
			}
			return iconC;
		});

		onMounted(() => {
			const stateIndex = store.getters.tabIndex;
			state.currentName = state.currentMenu[stateIndex].name;
		});

		const onChange = (index: number) => {
			console.log(index);
			state.tabIndex = index;
			Toast.clear();
			store.commit('setTabIndex', index);
		};

		return {
			...toRefs(state),
			items,
			getIcon,
			onChange,
		};
	},

});
</script>
<style lang="less" scoped>
.bus-tab-page {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	bottom: 0;
	display: flex;
	flex-direction: column;
	section {
		position: relative;
		flex: 1;
		height: 100%;
		.bus-tab-container {
			height: 100%;
			position: absolute;
			left: -1px;
			right: 0;
			top: -1px;
			bottom: 0;
		}
	}
	footer {
		.svg-icon {
			width: 26px;
			height: 26px;
		}
	}
}
</style>
