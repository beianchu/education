<template>
	<view>
		<search></search>
		<!-- 搜索组件 -->
		<!-- 两栏布局分类侧边栏 和 左侧商品 -->
		<view class="box-search">
			<u-row gutter="16">
				<u-col span="3">
					<view class="demo-layout bg-purple">
						<view class="tabr-h">
							<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
								<view class="rbarjj" :class="data.indexId == index ? 'active' : ''" v-for="(item, index) in data.tabrlist" :key="index" @click="qie(index)">
									{{ item.cat_name }}
								</view>
							</scroll-view>
						</view>
					</view>
				</u-col>
				<u-col span="9">
					<view class="demo-layout bg-purple-light">
						<view class="demo-layout bg-purple">
							<view class="tabr-h">
								<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
									<view class="boxshop">
										<view class="boxbigShop" v-for="(item, index) in data.tabrlist[data.indexId].children" :key="index">
											<view class="box-tile">
												<span>/{{ item.cat_name }}/</span>
											</view>
											<u-grid :col="3" :border="false">
												<u-grid-item v-for="(obj, index) in item.children" :key="index">
													<u-icon :name="obj.cat_icon" :size="76"></u-icon>
													<view class="grid-text">{{ obj.cat_name }}</view>
												</u-grid-item>
											</u-grid>
										</view>
									</view>
								</scroll-view>
							</view>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script lang="ts" setup>
import search from '../../component/searchbtn/searchbtn.vue';
import { getSwiperData, getNavData, getFolr, getCatelist } from '@/api/api.ts';
import { reactive } from 'vue';
const data = reactive({
	tabrlist: [],
	indexId: 0
});
getCatelist().then(res => {
	data.tabrlist = res.message;
	console.log(res, 'c屙屎为');
});
const qie = index => {
	data.indexId = index;
};
</script>

<style lang="scss" scoped>
.active {
	border-left: 10rpx solid red;
}
.tabr-h {
	height: calc(100vh - 100rpx);
	.boxshop {
		.boxbigShop {
			width: 100%;
			.box-tile {
				margin-top: 10rpx;
				text-align: center;
			}
		}
	}
	.rbarjj {
		width: 100%;
		line-height: 70rpx;
		text-align: center;
		// border-left: 3rpx solid brown;
	}
}
.u-col {
	padding: 0 !important;
}
.wrap {
	padding: 24rpx;
}

.u-row {
	margin: 40rpx 0;
}

.scroll-Y {
	height: 100%;
}
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
}
.scroll-view-item {
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
	font-size: 36rpx;
}
.scroll-view-item_H {
	display: inline-block;
	width: 100%;
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
	font-size: 36rpx;
}
</style>
