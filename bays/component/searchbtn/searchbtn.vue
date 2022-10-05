<template>
	<view>
		<view class="btn-box"><button class="box-search" @click="searchTo">搜索</button></view>
	</view>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({});
		const searchTo=()=>{
			uni.navigateTo({
				url:"/pages/searchPage/searchPage"
			})
		}
		return {
			searchTo,
			...toRefs(data)
		};
	}
};
</script>

<style lang="scss">
.btn-box {
	width: 100%;
	padding: 10rpx;
	height: 90rpx;
	background: #d75255;
	.box-search {
		height: 70rpx;
	}
}
</style>
