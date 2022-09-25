<template>
	<view>
	<p><span class="iconfont">&#xe601;</span></p>
	<br>
	<div class="bxotab">
		<div class="tabr" v-for="item,index in obj.labelList" :key="index">
			{{item.name}}
		</div>
	</div>
	<div style="width: 100%; padding: 0 20rpx;">
		<h1>{{obj.title}}</h1>
	</div>
	<div style="width: 100%; padding: 0 20rpx;">
<p><span>{{obj.nickName}}</span> <span>{{obj.createDate}}</span></p>
	</div>
		<div class="indexContent">
<div v-html="obj.htmlContent" style="padding: 20rpx; box-sizing: border-box;"></div>
		</div>
	</view>
</template>

<script>
import { reactive, toRefs } from "vue"
import {asklistIndex} from "../../api/api.js"
	export default {
		setup(){
			const data=reactive({
				obj:{}
			})
			asklistIndex().then(res=>{
				data.obj=res.data
			console.log(res,'加哈哈哈');
			})
			return{...toRefs(data)}
		}
	}
</script>

<style lang="scss">
	
.bxotab{
	padding: 0 20rpx;
	width: 100%;
	display: flex;
	.tabr{
		margin-left: 10rpx;
		padding: 10rpx 20rpx;
		border: 1rpx solid royalblue;
		border-radius: 10rpx;
		color: blue;
		
	}
}
</style>
