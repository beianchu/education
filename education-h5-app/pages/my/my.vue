<template>
	<view class="header-bottom"></view>
	<view class="header" @click="dengl">
		<view class="header-img"></view>
		<view class="right">
		<image src="../../static/logo.png" mode="" style="width: 100rpx;height: 100rpx;"></image>
			<span v-if="flag==false" @click="$router.push('/pages/logins/logins')">请登录</span>
			<view v-else class="yongh" @click="ziliao">
				<p>万强</p>
				<p>用户名：Deborah Martinez</p>
			</view>
			<uni-icons type="forward" size="24"></uni-icons>
		</view>
	</view>
	<view class="nav">
		<uni-icons type="calendar-filled" size="30" color="#7dc0ff"></uni-icons>
		<view class="right">
			<span @click="myshop">我的订单</span>
			<uni-icons type="forward" size="24"></uni-icons>
		</view>
	</view>
	<view class="nav">
		<uni-icons type="locked-filled" size="30" color="#7dc0ff"></uni-icons>
		<view class="right">
			<span  @click="mymoney">我的余额</span>
			<uni-icons type="forward" size="24"></uni-icons>
		</view>
	</view>
	<view class="nav nav1">
		<uni-icons type="locked-filled" size="30" color="#7dc0ff"></uni-icons>
		<view class="right">
			<span  @click="mystuddy">我的学习</span>
			<uni-icons type="forward" size="24"></uni-icons>
		</view>
	</view>
	<view class="nav" @click="shezhi">
		<uni-icons type="gear-filled" size="30" color="#7dc0ff"></uni-icons>
		<view class="right">
			<span  @click="setting">设置</span>
			<uni-icons type="forward" size="24"></uni-icons>
		</view>
	</view>
	<view class="nav nav1">
		<uni-icons type="flag-filled" size="30" color="#7dc0ff"></uni-icons>
		<view class="right">
			<span  @click="bakclist">意见反馈</span>
			<uni-icons type="forward" size="24"></uni-icons>
		</view>
	</view>
	<view class="nav">
		<uni-icons type="contact" size="30" color="#7dc0ff"></uni-icons>
		<view class="right">
			<span @click="wes">关于我们</span>
			<uni-icons type="forward" size="24"></uni-icons>
		</view>
	</view>
</template>

<script>
import { ref, reactive, toRefs,  } from 'vue';
import {useRoute} from "vue-router"
export default {
	setup() {
		const data = reactive({});
         const route=useRoute()
		 console.log(route,'路由跳转的数据');
		const dengl = () => {
			if (localStorage.getItem('token')) {
				// 详情页面
				uni.navigateTo({
					url: '/pages/ziliao/ziliao'
				});
			}else{
				// 登录页面
				uni.navigateTo({
					url: '/pages/Logins/Logins'
				});
			}
			
		};
		// 点击跳转我的订单页面
		const myshop=()=>{
			uni.navigateTo({
				url: '/pages/orderView/orderView',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
		// 点击跳转我的余额
		const mymoney=()=>{
			uni.navigateTo({
				url: '/pages/blanceView/blanceView',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
		// 点击跳转我的学习
		const mystuddy=()=>{
			uni.navigateTo({
				url: '/pages/studyView/studyView',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
		// 点击跳转设置
		const setting=()=>{
			uni.navigateTo({
				url: '/pages/setupView/setupView',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
		// 点击跳转到意见反馈
		const bakclist=()=>{
			uni.navigateTo({
				url: '/pages/blanceView/blanceView',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
		// 点击跳转到关于我们
		const wes=()=>{
			uni.navigateTo({
				url: '/pages/OptionsvVeiw/OptionsvVeiw',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
		// 点击跳转到意见反馈
		const ziliao=()=>{
			// 登录页面
			uni.redirectTo({
				url: '/pages/ziliao/ziliao'
			});
		}
		// 点击设置
		const shezhi=()=>{
			uni.redirectTo({
				url: '/pages/setting/setting'
			});
		}
		return {
			myshop,
			mymoney,
			mystuddy,
			setting,
			bakclist,
			wes,
			dengl,
			ziliao,
			shezhi
		};
	
	},

	data() {
		return {
			// 定义判断是否有token值
			flag: false
		};
	},
	onLoad() {
		// 如果有token值
		if (localStorage.getItem('userToken')) {
			console.log(123);
			this.flag = true;
		} else {
			// 没有token值
			console.log(321);
			this.flag = false;
		}
		console.log(this.flag);
	}
};
</script>

<style lang="scss">
.header {
	display: flex;
	background-color: #fff;
	justify-content: space-between;
	border-bottom: 10px solid #efefef;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	position: relative;
	top: -15px;
	.header-img {
		width: 100px;
		border-top-left-radius: 15px;
		image {
			border-top-left-radius: 15px;
			height: 100px;
			width: 100px;
		}
	}
	.right {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		span {
			font-size: 20px;
			font-weight: 700;
		}
	}
}
.nav {
	border-bottom: 2px solid #efefef;
	display: flex;
	height: 50px;
	justify-content: space-between;
	align-items: center;
	.uni-icons {
		padding: 10px;
	}
	.right {
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		// color: #7dc0ff;
	}
}
.nav1 {
	border-bottom: 10px solid #efefef;
}
.header-bottom {
	height: 60px;
	background-color: rgba(52, 93, 194);
}
.yongh{
	p:nth-of-type(1){
		font-weight: 900;
		font-size: 20px
	}
}
</style>
