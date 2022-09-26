<template>
	<view>
	<p><span class="iconfont" @click="$router.push('/pages/my/my')">&#xe601;</span></p>
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
		<div class="boxAask">
			<div class="akslsit">
				{{arr.length}}个问题
			</div>
		</div>
		<div class="boxuserList" v-for="item,index in arr" :key="index">
			<!-- <div> -->：
			<image style="width: 100rpx;height:100rpx;border-radius: 50%;" :src="item.userImage" mode="" ></image>
				<div class="boxTIL">
					<div class="toptitle" style="color: gray;">
						<p>{{item.nickName}}</p> <p>{{item.createDate}}</p>
					</div>
					<div style="font-size: 35rpx;">
						{{item.mdContent}}
					</div>
				<!-- </div> -->
			</div>
		</div>
		<div class="bottom-bxo">
			<div class="boxakslll">关注问题</div>
				<div class="boxakslll">回答问题</div>
		</div>
	</view>
</template>

<script>
import { reactive, toRefs } from "vue"
import {asklistIndex,userlsitread} from "../../api/api.js"
	export default {
		setup(){
			const data=reactive({
				obj:{},
				arr:[]
			})
			// 详情用户数据接口
			userlsitread().then(res=>{
				data.arr=res.data
				console.log(res,'用户数据接口！');
			})
			// 详情数据接口
			asklistIndex().then(res=>{
				data.obj=res.data
			console.log(res,'加哈哈哈');
			})
			return{...toRefs(data)}
		}
	}
</script>

<style lang="scss">
	.bottom-bxo{
		width: 100%;
		height: 80rpx;
		border-top: 1rpx solid darkgray;
		display: flex;
	justify-content: space-around;
	line-height: 80rpx;
	position: fixed;
	bottom: 0;
	background-color: white;
	.boxakslll{
		font-weight: 700;
color: #2593fd;
	}
	}
	*{
		box-sizing: border-box;
	}
	.boxuserList{
		display: flex;
		padding: 70rpx 20rpx;
		// justify-content: space-between;
		.boxTIL{
			flex: 1;
			margin-left: 20rpx;
			.toptitle{
				display: flex;
				justify-content: space-between;
			}
		}
		
	}
	.boxAask{
		border-top:10rpx solid #f1f1f1;
		margin-top: 40rpx;
		padding: 30rpx 50rpx;
		width: 100%;
		height:100rpx;
		.akslsit{
			padding:0 50rpx;
			border-left:10rpx solid blue;
		font-weight: 800;
			font-size: 40rpx;
		}
	}
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
