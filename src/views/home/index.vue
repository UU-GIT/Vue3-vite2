<template>
	<div class="page-box"
		 :style="{'padding-top': `${statusBarH}px`}">
		<div class="page-banner-box">
			<search-header @input-search="inputSearch"></search-header>
			<!-- 搜索 end -->
			<ul class="banner-text">
				<li class="info-item"
					v-for="(item,index) in bannerInfoList"
					:key="index">
					<ui-icon :name="item.icon"
							 size="md"
							 svg />
					<span class="info-text">{{item.text}}</span>
				</li>
			</ul>
		</div>
		<!-- 当前定位 end -->
		<template v-if="actionList.length<1">
			<ui-activity-indicator class="loading-wrapper"
								   type="carousel"
								   :size="12"
								   :text-size="15"
								   vertical>正在为您加载功能模块,请稍候</ui-activity-indicator>
		</template>
		<template v-else>
			<div class="page-main-box">
				<ui-scroll-view :scrolling-x="false"
								autoReflow>
					<action-box v-for="(action,index) in  actionList"
								:class="{'action-box-one':index===0}"
								:searchKey='inputValue'
								:key="index"
								:title='action.name'
								:icon='action.icon'
								:itemList='action.actionList'
								:customAction='true'></action-box>
				</ui-scroll-view>
			</div>
		</template>
	</div>
</template>
<script lang="ts">
// import { defineComponent } from 'vue';
// import { Component, Watch } from 'vue-property-decorator';
// import { mixins } from 'vue-class-component';
// import { Getter, Mutation } from 'vuex-class';
// import { tools } from 'mtapp-core';
// import { Icon, ScrollView, ActivityIndicator } from 'mtapp-ui';
// import actionBox from '@/components/actionBox.vue';
// import { settingList } from '@/utils/actionList';
// import { ActionListO } from '@/typings/public.d';
// import { BannerInfoO, NativePositionO } from './index.d';
// import searchHeader from '@/components/searchHeader.vue';
// import { Mixin } from '@/common/mixin/nativePermisssionMixin';
// import { ACCESS_FINE_LOCATION } from '@/utils/nativePermissionsList';

// import Runtime from '@/common/runtime/index';
// Runtime.useAll('native');
// export default defineComponent({
// 	setup() {

// 	},
// });
</script>
<style lang="less" scoped>
.page-box {
	height: 100%;
	display: flex;
	flex-direction: column;
	background: url('../../assets/images/banner.png') no-repeat;
	background-size: 100%;
	.loading-wrapper {
		position: absolute;
		top: 200px;
		left: 0;
		right: 0;
		font-size: 13px;
		text-align: center;
	}
	.page-banner-box {
		display: flex;
		flex-direction: column;
		padding-top: 5px;
		.banner-text {
			padding: 8px 18px;
			color: #ffffff;
			font-size: 16px;
			.info-item {
				display: flex;
				align-items: center;
				margin: 20px 0;
				.icon-svg {
					width: 16px;
					height: 16px;
				}
				.info-text {
					margin-left: 12px;
				}
			}
		}
	}
	.page-main-box {
		flex: 1;
		border-radius: 20px 20px 0 0;
		background: #fff;
		.action-box-one {
			border-radius: 20px 20px 0 0;
		}
		.more-btn {
			height: 44px;
			border: 1px solid #cfd3d8;
			margin: 10px 20px;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 4px;
			color: #aeb5bd;
		}
	}
	.no-update-content-box {
		width: 270px;
		height: 20%;
		background: #fff;
		border-radius: 4px;
		padding: 30px 20px;
		font-size: 16px;
		.no-update-btn {
			margin-top: 30px;
			text-align: right;
			color: #248aeb;
		}
	}
	.add-action {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
	}
}
</style>
