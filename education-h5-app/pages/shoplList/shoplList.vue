<template>
	<view>
		<div class="bx-content">
		
			<div class="bximg" :style="`background:url(${obj.mainImage}) ;`"><div class="yuan" @click="backTo">1</div></div>
			<div class="title-box">
				<p class="txt1p">
					<span class="txt-Red">${{obj.priceDiscount}}</span>
					<span class="txt-grb"><s>${{obj.priceOriginal}}</s></span>
					<span class="yuanred">优惠价格</span>
				</p>
				<h4 class="heafrd">{{obj.title}}</h4>
				<p class="goodiCON">
					<span class="foolr">100%好评!</span>
					<span class="foolr">{{obj.studyTotal}}人在学习`</span>
				</p>
			</div>
			<ul class="boxlist">
				<li v-for="item,index in list" :key="index"><span :class="tbrId==index?'active':''" @click="indexClick(index)">{{item}}</span></li>
			</ul>
			<image v-if="tbrId==0" src="https://img.alicdn.com/imgextra/i2/3603079088/O1CN01V8VO2y2H0M5Bx33L3_!!3603079088.jpg" mode="widthFix" style="width: 100%;"></image>
			1
			<ul class="pinglun">
				<li>
					<div>
						<div class="leftimgbox">
							<!-- <image src="" mode=""></image> -->
						</div>
						<div class="rightboxtxt">
							<h4>诗经</h4>
							<div class="txtbox">
								<p>时间222222</p>
								<p>@</p>
							</div>
						</div>
					</div>
					<p>真的好像笑了我真辜负了啥哈哈哈这他还有谁</p>
					<div class="txtbacklsit">
					将是回复感谢你一直以来的支持!梦学古陪你学习 伴你梦想!</div>
				</li>
			</ul>
		</div>
		
		<div class="bxtn-boxs"><div class="btn-box">立即购买</div></div>
	</view>
</template>

<script>
	import { reactive, toRefs } from "vue"
	import {indexList,pinglunlist} from "../../api/api.js"
export default {
	setup(){
		const data=reactive({
			obj:{},
			list:['详情','章节','评论','套餐'],
			tbrId:0,
		})
		// 点击返回上个跳转的商品页面
		const backTo=()=>{
			uni.navigateBack({
				delta: 1
			});
		}
		// 评论数据接口
		pinglunlist().then(res=>{
			console.log(res,'评论接口数据');
		})
		// 点tabr栏切换内容并且高亮
		const indexClick=(i)=>{
			data.tbrId=i
		}
		return{
			indexClick,
			backTo,
			...toRefs(data)
		}
	},
	onPageScroll(){
		
	},
	// 接受穿过来的数据并进行操作渲染页面信息
	onLoad(options){
		indexList(options.id).then(res=>{
			console.log(res,'详情页数据');
			this.obj=res.data
		})
		console.log(options.id,'接受id');
	}
};
</script>

<style lang="scss">
	
.bxtn-boxs {
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	.btn-box {
		margin: 10rpx;
		width: 80%;
		text-align: center;
		color: white;
		border-radius: 50rpx;

		height: 100rpx;
		line-height: 100rpx;
		position: fixed;
		bottom: 0;
		background-color: #007aff;
	}
}

.active {
	text-align: center;
	color: #007aff;
	display: inline-block;
	border-bottom: 5rpx solid #007aff;
	// padding: 10rpx 0;
}
* {
	margin: 0;
	padding: 0;
	// box-sizing: border-box;
}
li{
	list-style: none;
}
.bx-content {
	background: white;
	width: 100%;
	height: auto;
	.pinglun{
		
	}
	.boxlist {
		list-style: none;
		display: flex;
		justify-content: space-around;
	}
	.bximg {
		box-sizing: border-box;
		padding: 10rpx;
		width: 100%;
		height: 500rpx;
		// background-color: darkred;
		.yuan {
			text-align: center;
			line-height: 100rpx;
			background-color: rgb(0, 0, 0, 0.4);
			border-radius: 50%;
			height: 100rpx;
			width: 100rpx;
			color: white;
		}
	}
	.title-box {
		padding: 50rpx;
		width: 100%;
		height: 200rpx;
		background-color: white;
		border-top: 5rpx solid #f8f9fb;
		.txt1p {
			.txt-Red {
				color: red;
				font-size: 50rpx;
				font-weight: 600;
			}
			.txt-grb {
				display: inline-block;
				margin-left: 10rpx;
				color: lightgray;
			}
			.yuanred {
				margin: 0 10rpx;
				border: 1px solid red;
				border-radius: 10rpx;
				font-size: 15rpx;
			}
		}
		.heafrd {
			font-size: 35rpx;
		}
		.goodiCON {
			margin-top: 29rpx;
			.foolr {
				margin-right: 10rpx;
				padding: 10rpx;
				// color: red;
				border-radius: 20rpx;
				background: #f8f9fb;
			}
		}
	}
}
</style>
