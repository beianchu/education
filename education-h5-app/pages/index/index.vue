<template>
	<div>
		<myinput :clock="clock"></myinput>
		<swiper class="swiper" @change="img" circular indicator-dots="true" autoplay="true" interval="2000"
			duration="500" indicator-color="rgba(225,225,225,.5)" indicator-active-color="#fff">
			<swiper-item v-for="item,index in src" :key="index" :style="`background:${item.bgc}`">
				<view class="swiper-item uni-bg-red">
					<image :src="`http://m.mengxuegu.com/${item.imageUrl}`" @click="bannerTO"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="classification">
			<ul>
				<li v-for="item,index in fication.slice(0,7)">{{item.name}}</li>
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

		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
			<view id="demo1" class="scroll-view-item_H uni-bg-red">
				<HotList></HotList>
			</view>
			<view id="demo2" class="scroll-view-item_H uni-bg-green">
				<HotList></HotList>
			</view>
		</scroll-view>

		<!-- 近期上新 -->
		<div class="box-txt">
			<div class="txt-red">
				近期上新 <span class="htitle">NEW</span>
			</div>
			<div class="allbox">全部></div>
		</div>
		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
			<view id="demo1" class="scroll-view-item_H uni-bg-red">
				<newlsit></newlsit>
			</view>
			<!-- <view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
							<vie -->
		</scroll-view>
		<!-- <scroll-view scroll-x="true" class="scrollbox">
			<view class="scirool">

				<HotList></HotList>
			</view>
		</scroll-view> -->
		<!-- 免费精选 -->
		<div class="box-txt">
			<div class="txt-red">
				免费精选 <span class="htitle">NEW</span>
			</div>
			<div class="allbox">全部></div>
		</div>
		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
			<view id="demo1" class="scroll-view-item_H uni-bg-red">
				<HotList></HotList>
			</view>
			<!-- <view id="demo2" class="scroll-view-item_H uni-bg-green">
				<HotList></HotList>
			</view> -->

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

				<money :data="arr"></money>
			</view>
		</scroll-view>
		<view class="backbox" v-if="flag" @tap="backGo"><span class="iconfont">&#xed53;</span></view>
		<view class="box-btom" v-if="moer">
			我是有底线的，没有更多了
		</view>
	</div>
</template>

<script>
	import money from "../../components/components/money/money.vue"
	import newlsit from "../../components/components/newList2/newList2.vue"
	// 列表组件
	import HotList from '../../components/components/HotList/HotList.vue'
	// 头部组件
	import myinput from '@/components/components/head-search/head-search.vue'
	import {
		list
	} from "../../api/api.js"
	import {
		swiper,
		bannerimg
	} from '../../api/api.js';
	import {
		reactive,
		toRefs
	} from 'vue'
	// import {on} from "@uni"
	export default {
		components: {
			myinput,
			HotList,
			newlsit,
			money

		},
		onReachBottom() {
			console.log('哈哈哈哈哈');
		},
		setup() {
			const data = reactive({
				arr: [],
				flag: false,
				moer: false,
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
			// 轮播图数据列表
			swiper().then(res => {
				// console.log(res.data);
				data.fication = res.data
			})
			// 轮播图接口
			bannerimg().then(res => {
				data.src = res.data
				// console.log(res, '轮播图数据');
			})
			// 点击轮播图
			const bannerTO = () => {
				console.log('bannerTO');
			}
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
			window.onscroll = function() {

				let clientHeight = document.documentElement.clientHeight; //浏览器高度
				let scrollHeight = document.body.scrollHeight;
				let scrollTop = document.documentElement.scrollTop;
				// 判断当大于1000时显示返回顶部 v-if判断
				if (scrollTop >= 650) {
					data.flag = true
				} else {
					data.flag = false
				}
				let distance = 50;
				//距离视窗还用50的时候，开始触发；
				// 
				if (data.arr.lenght < 60) {

				} else {
					data.moer = true
				}
				if (scrollTop + clientHeight >= scrollHeight) {
					// console.log(111);

					list().then(res => {
						if (data.arr.length < 60) {
							data.arr = [...data.arr, ...res.data.records]
						}

						// console.log(res,'下拉数据');
					})


				}
				// 判断v-if 数组的长度 当到达一定的条数的时候停止加载在数据

			}

			return {
				backGo,
				...toRefs(data),
				bannerTO,
				img
			}


		},
		onReachBottom() {
			console.log(this.flag);
		}

	}
</script>

<style lang="scss">
	.scroll-Y {
		height: atuo;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: atuo;
		// line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 90%;
		height: atuo;
		// line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.box-btom {
		height: atuo;
		// line-height: 100rpx;
		width: 100%;
		text-align: center;
		color: gray;
	}

	@font-face {
		font-family: 'iconfont';
		src: url('iconfont.woff2?t=1663728065336') format('woff2'),
			url('iconfont.woff?t=1663728065336') format('woff'),
			url('iconfont.ttf?t=1663728065336') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
	@font-face {
		font-family: 'iconfont';
		/* Project id 3656445 */
		src: url('//at.alicdn.com/t/c/font_3656445_tn79ffnjdc7.woff2?t=1663728107339') format('woff2'),
			url('//at.alicdn.com/t/c/font_3656445_tn79ffnjdc7.woff?t=1663728107339') format('woff'),
			url('//at.alicdn.com/t/c/font_3656445_tn79ffnjdc7.ttf?t=1663728107339') format('truetype');
	}

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

	.scirool {
		overflow-x: scroll;
	}

	.scrollbox {
		// overflow-x: scroll;
		// width: 100%;
		display: flex;
		justify-content: space-between;
		// width: 200%;
		// .boxlist{
		// 	width: 70%;
		// }
	}

	.box-imgs {
		// width: 100%;
		display: flex;
		// overflow-x: scroll;
		justify-content: space-around;
	}

	.box-txt {
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.txt-red {
			.htitle {
				background-image: linear-gradient(to right, $mxg-color-orange, $mxg-text-color-red);
				font-size: 20rpx;
				color: #fff;
				padding: 10rpx;
				border-radius: 30rpx 30rpx 30rpx 0;
			}
		}

		.allbox {
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
