<template>
	<div>
	<myinput :clock="clock"></myinput>
	<swiper class="swiper" @change="img" circular indicator-dots="true" autoplay="true" interval="2000" duration="500"
		indicator-color="rgba(225,225,225,.5)" indicator-active-color="#fff">
		<swiper-item v-for="item,index in src" :key="index" :style="`background:${item.bgc}`">
			<view class="swiper-item uni-bg-red">
				<image :src="item.img"></image>
			</view>
		</swiper-item>
	</swiper>
	<view class="classification">
		<ul>
			<li v-for="item,index in fication.slice(0,7)" >{{item.name}}</li>
			<li>全部分类</li>
		</ul>
	</view>
	<!-- 热门推荐视频列表 -->
	<div class="box-txt">
		<div class="txt-red">
			热门推荐 <span class="htitle">HoT</span>
		</div>
		<div class="allbox">全部></div>
	</div>
	<scroll-view scroll-x="true" class="scrollbox">
		<view class="box-imgs">
			<HotList></HotList>
			<!-- <HotList></HotList> -->
		</view> 	
	</scroll-view>
	<!-- 近期上新 -->
	<div class="box-txt">
		<div class="txt-red">
		近期上新 <span class="htitle">NEW</span>
		</div>
		<div class="allbox">全部></div>
	</div>
	<scroll-view scroll-x="true" class="scrollbox">
		<view class="scirool">
			<!-- <HotList></HotList> -->
			<!-- <newlist></newlist> -->
			<!-- <HotList></HotList> -->
			<HotList></HotList>
		</view> 	
	</scroll-view>
	<!-- 免费精选 -->
	<div class="box-txt">
		<div class="txt-red">
		免费精选 <span class="htitle">NEW</span>
		</div>
		<div class="allbox">全部></div>
	</div>
	<scroll-view scroll-x="true" class="scrollbox">
		<view class="scirool">
			<!-- <HotList></HotList> -->
			<!-- <newlist></newlist> -->
			<!-- <HotList></HotList> -->
			<HotList></HotList>
		</view> 	
	</scroll-view>
	<!-- 付费精选 -->

	<div class="box-txt">
		<div class="txt-red">
		付费精选 <span class="htitle">NEW</span>
		</div>
		<div class="allbox">全部></div>
	</div>
	<scroll-view scroll-x="true" class="scrollbox">
		<view class="scirool">
			<!-- <HotList></HotList> -->
			<!-- <newlist></newlist> -->
			<!-- <HotList></HotList> -->
			<newlsit :data="arr"></newlsit>
		</view> 	
	</scroll-view>
	<div class="backbox"  @click="backToTop22"></div>
	</div>
</template>

<script>
	import newlsit from "../../components/components/newList2/newList2.vue"
	// 列表组件
	import HotList from '../../components/components/HotList/HotList.vue'
	// 头部组件
	import myinput from '@/components/components/head-search/head-search.vue'
	import {list} from "../../api/api.js"
	import {
		swiper
	} from '../../api/api.js';
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		components: {
			myinput,
			HotList,
			newlsit
			
		},
		setup() {
			const data = reactive({
				arr:[],
				src: [{
						img: '../../static/static/images/banner1.jpg',
						bgc: 'linear-gradient(to top, #fff 0%, #3a2e5e 100%)'
					},
					{
						img: '../../static/static/images/banner2.jpg',
						bgc: 'linear-gradient(to top, #fff 0%, #68ba0f 100%)'
					},
					{
						img: '../../static/static/images/banner3.jpg',
						bgc: 'linear-gradient(to top, #fff 0%, #0f6ab4 100%)'
					},
				], // 轮播图数据
				clock: '#3a2e5e', //背景颜色
				fication: [], // 分类数据
			})
			swiper().then(res => {
				console.log(res.data);
				data.fication = res.data
			})
			const img = (e) => {
				// console.log(e.detail.current);
				if (e.detail.current == 0) {
					data.clock = '#3a2e5e'
				} else if (e.detail.current == 1) {
					data.clock = '#68ba0f'
				} else {
					data.clock = '#0f6ab4'
				}
			}
			// 点击干返回顶部
			const backToTop22=()=>{
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
			window.onscroll = function() {
				
				    let clientHeight  = document.documentElement.clientHeight; //浏览器高度
				    let scrollHeight = document.body.scrollHeight;
				    let scrollTop = document.documentElement.scrollTop;
				 
				    let distance = 50;  //距离视窗还用50的时候，开始触发；
				if(scrollTop + clientHeight >= scrollHeight){
					console.log(111);
					list().then(res=>{
						data.arr=[...data.arr,...res.data.records]
						console.log(res,'下拉数据');
					})
				}
				    // if ((scrollTop + clientHeight) &gt;= (scrollHeight - distance)) {
				    //     console.log("到底了，开始加载数据");
				    // }
			  //为了保证兼容性，这里取两个值，哪个有值取哪一个
			  //scrollTop就是触发滚轮事件时滚轮的高度
			  // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			  // console.log("滚动距离" + scrollTop,window.outerHeight);
			  // // if (scrollTop + clientHeight >= scrollHeight)
			  // if(window.outerHeight-scrollTop==80){
				 //  console.log(哈哈哈哈11111111111111111111111111);
			  // }
			}
			
			return {
				...toRefs(data),
				img
			}
		}

	}
</script>

<style lang="scss">
	.backbox{
	width: 200rpx;
	height: 200rpx;
	border-radius: 50%;
	background-color: red;
	position: fixed;
	top: 1200rpx;
	right: 10rpx;
	
	}
	.scirool{
		overflow-x: scroll;
	}
	.scrollbox{
		display: flex;
	}
	.box-imgs{
		width: 100%;
		display: flex;
	overflow-x: scroll;
		justify-content: space-around;
	}
	.box-txt{
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.txt-red{
			.htitle{
				background-image: linear-gradient(to right,$mxg-color-orange,$mxg-text-color-red);
				font-size: 20rpx;
				color: #fff;
				padding: 10rpx;
				border-radius: 30rpx 30rpx 30rpx 0;
			}
		}
		.allbox{
			color: gray;
		}
	}
	* {
		margin: 0;
		padding: 0;
	}

	.classification {
		width: 100%;

		ul {
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			align-items: center;
			justify-content: center;

			li {
				width: 20%;
				text-align: center;
				background-color: rgba(119, 119, 119, 0.1);
				border-radius: 5rpx;
				margin: 5rpx 5rpx;
				padding: 3px 0;
				font-size: 16rpx;
			}
		}
	}

	.bgc {
		width: 100%;
		/* background: linear-gradient(to top, #fff 0%, #45328c 100%); */
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
		margin-top: 60rpx;
	}

	.swiper-item {
		display: block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}

	image {
		width: 90%;
		border-radius: 20rpx;
		height: 92%;
		margin-top: 20rpx;
	}
</style>
