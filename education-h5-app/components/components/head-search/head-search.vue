<template>
	<view class="view" :style="`background-color: ${clock}`">
		<view class="input" @click="toSearch">
			<img src="../../../static//放大镜.png">
			搜索你想要的内容
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		props: ['clock'],
		setup(props, tcx) {
			const data = reactive({})
			console.log(props);
			// 点击跳转到搜索页面
		const toSearch=()=>{
			uni.navigateTo({
				url: '/pages/Tosearch/Tosearch',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
			return {
				toSearch,
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.view {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		height: 60rpx;
		color: #777;
		position: fixed;
		top: 0;
		z-index: 1;

		.input {
			width: 96%;
			border-radius: 20px;
			background-color: #fff;
			font-size: 14rpx;
			height: 45rpx;
			line-height: 45rpx;
			text-align: center;

			img {
				width: 30rpx;
				height: 30rpx;
				vertical-align: middle;
			}
		}
	}
</style>
