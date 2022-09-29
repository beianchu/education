<template>
	<view class="content">
		<view class="btn-box"><button class="box-search">搜索</button></view>
		<!--以上是搜索框点击跳转到搜索页面 -->
		<view class="wrap" style="height: auto;"><u-swiper :list="list" name="item.image_src"></u-swiper></view>
		<!-- 以上是轮播图片 -->
		<!-- 分类导航栏 -->
		<view class="cate">
		<u-grid :col="4">
				<u-grid-item v-for="item,index in data.navList" :key="index">
					<image :src="item.image_src" mode="" style="width: 120rpx;height: 120rpx;"></image>
					
				</u-grid-item>
				
			</u-grid>
		</view>
	</view>
</template>

<script lang="ts" setup>

	import {getSwiperData,getNavData} from "@/api/api.ts"
import { reactive } from "vue";
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
const data=reactive({
	list:[],
	navList:[]
})
getSwiperData().then(res=>{
	
	data.list=res.message
	console.log(res,'res');
})
getNavData().then(res=>{
	data.navList=res.message
	console.log(res,'导航');
})
</script>

<style lang="scss">
	.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
		}
.btn-box {
	width: 100%;
	padding: 10rpx;
	height: 90rpx;
	background: #d75255;
	.box-search {
		height: 70rpx;
	}
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
