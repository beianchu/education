<template>
	<view>
			<view class="backbox" v-if="data" @tap="backGo"><span class="iconfont">&#xed53;</span></view>
	</view>
</template>

<script>
import { reactive,toRefs} from "vue"
	export default {
		props:['data'],
		setup(){
			const data=reactive({})
			// 点击干返回顶部
			const backGo = () => {
				console.log(11);
				let a = document.documentElement.scrollTop;
				console.log(a);
				let timer = setInterval(() => {
					if (a > 0) {
						a -= 100;
						window.scrollTo(0, a);
					} else {
						clearInterval(timer);
					}
				}, 10);
			}
			return{
				backGo,
				...toRefs(data)
			}
		}
	}
</script>

<style>
.backbox {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: rgb(0, 0, 0, 0.5);
		position: fixed;
		top: 800rpx;
		right: 10rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 20rpx;
		color: white;

	}
</style>
