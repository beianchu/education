<template>
	<view class="wrap" v-for="(item, index) in data.list" :key="index">
		<view class="img-title" style="padding-top:50rpx ;"><image :src="item.floor_title.image_src" mode="" style="width: 552rpx; height: 50rpx;"></image></view>
		<u-row gutter="16">
			<u-col span="4">
				<view class="demo-layout bg-purple" v-for="(obj, i) in item.product_list" :key="i" v-show="i == 0"><image :src="obj.image_src" style="width: 100%;"></image></view>
			</u-col>
			<u-col span="8">
				<view class="demo-layout bg-purple-light">
				
					<u-grid :col="2" border="false"  custom-style="{padding:'0 0'}">
						<u-grid-item v-for="(obj, i) in item.product_list" :key="i" v-show="i != 0" style="width: 100%;height: 100%;border-radius: 10rpx; padding: 0;">
							<view class="grid-text"><image :src="obj.image_src" mode="" style="width:232rpx; height: 200rpx;"></image></view>
						</u-grid-item>
					</u-grid>
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { getSwiperData, getNavData, getFolr } from '@/api/api.ts';
const data = reactive({
	list: []
});
// 楼层问题
getFolr().then(res => {
	data.list = res.message;
	console.log(res, '楼层');
});
</script>

<style scoped lang="scss">
	.u-grid-item-box data-v-691f72d1 u-border-right u-border-bottom{
		padding: 0 10rpx !important;
	}
.wrap {
	padding: 24rpx;
	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}
}

.u-row {
	margin: 40rpx 0;
}

.demo-layout {
	height: auto;
	border-radius: 8rpx;
}

.bg-purple {
	background: #d3dce6;
}

.bg-purple-light {
	background: #e5e9f2;
}

.bg-purple-dark {
	background: #99a9bf;
}
</style>
