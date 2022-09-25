<template>
	<view>
		<div class="boxSearch">
			<div><span class="iconfont" @click="backOlde" style="font-size: 70rpx;">&#xe601;</span></div>
			<input class="iptSearch" type="text" placeholder="&#xe601; 请输入你想要的内容" />
			<p>取消</p>
		</div>
		<div class="remen">
			<p>热门搜索</p>
			<br />
			<div class="search"><div class="boxtab" v-for="(item, index) in arr">{{item.name}}</div></div>
		</div>
		<div class="remen">
			<div class="boxTilte">
				<p>历史搜索</p>
				<p style="color: gray;">清空</p>
			</div>
			<br />
			<div class="search"><div class="boxtab" v-for="(item, index) in arr2">{{item.name}}</div></div>
		</div>
	</view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { serchlistsTile } from '../../api/api.js';
export default {
	setup() {
		const data = reactive({
			arr:[
				{
					name:"java"
				},
				{
					name:"Python"
				},
				{
					name:"Vue.js"
				},
				{
					name:"React"
				},
				{
					name:"SpringBoot"
				},
				{
					name:"SpringCloud"
				}
			],
			arr2:[
			{
				name:"java"
			},
			{
				name:"Python"
			}
			],
		});
		// 点击返回上一页
		const backOlde = () => {
			uni.navigateBack({
				delta: 1
			});
		};
		// // 搜索类型接口数据
		// serchlistsTile().then(res => {
		// 	console.log(res, '搜索接口数据类型');
		// });
		return { ...toRefs(data), backOlde };
	}
};
</script>

<style lang="scss">
.remen {
	box-sizing: border-box;
	width: 100%;
	padding: 30rpx;
	.boxTilte {
		display: flex;
		justify-content: space-between;
	}
	.search {
		display: flex;
		flex-wrap: wrap;
		.boxtab {
			color: gray;
			margin: 10rpx;
			padding:10rpx 20rpx;
			border-radius: 10rpx;
			border: 1rpx solid darkgray;
		}
	}
}
.boxSearch {
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80rpx;
	padding: 50rpx 0;
	border-bottom: 1rpx solid #f0f1f2;
	.iptSearch {
		margin: 0 10rpx;
		background-color: #f0f1f2;
		width: 70%;
		height: 70rpx;
		border-radius: 30rpx;
	}
}
</style>
