<template>
	<view class="content">
	
		<!--以上是搜索框点击跳转到搜索页面 -->
		<view class="wrap"><u-swiper :list="data.list" name="image_src" style="height: 300rpx;"></u-swiper></view>
		<!-- 以上是轮播图片 -->
		<!-- 分类导航栏 -->
		<view class="cate">
			<u-grid :col="4" :custom-style="{padding:'0'}" :broder="false">
				<u-grid-item v-for="(item, index) in data.navList" :key="index">
					<view style="width: 100%;height: 100%;"><image :src="item.image_src" mode="widthFix" style="width: 100%;height: 100%;"></image></view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 楼层结构样式 -->

		<foolr></foolr>
	</view>
</template>

<script lang="ts" setup>
import foolr from '../../component/foolr.vue';
import { getSwiperData, getNavData, getFolr } from '@/api/api.ts';
import { reactive } from 'vue';
// import { log } from "util";
// const list = [
// 	{
// 		image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
// 		title: '昨夜星辰昨夜风，画楼西畔桂堂东'
// 	},
// 	{
// 		image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
// 		title: '身无彩凤双飞翼，心有灵犀一点通'
// 	},
// 	{
// 		image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
// 		title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
// 	}
// ];

const data = reactive({
	list: [],
	navList: []
});
getSwiperData().then(res => {
	data.list = res.message;
	// console.log(res,'res');
});
getNavData().then(res => {
	data.navList = res.message;
	// console.log(res,'导航');
});
// 楼层问题
getFolr().then(res => {
	// console.log(res, '楼层');
});
//分类数据接口
// getCatelist().then(res=>{
// 	console.log(res,'分类');
// })
</script>

<style lang="scss">
.wrap {
	padding: 24rpx;
}

.u-row {
	margin: 40rpx 0;
}

.demo-layout {
	height: 80rpx;
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
.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $u-type-info;
}


.badge-icon {
	position: absolute;
	top: 14rpx;
	right: 40rpx;
	width: 30rpx;
	height: 30rpx;
}

.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $u-type-info;
}
</style>
