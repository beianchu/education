<template>
	<view>
		<div class="bx-content">
			<div class="bximg" :style="`background:url(${obj.mainImage}) ;`"><div class="yuan" @click="backTo"><span class="iconfont">&#xe601;</span></div></div>
			<div class="title-box">
				<p class="txt1p">
					<span class="txt-Red">${{ obj.priceDiscount }}</span>
					<span class="txt-grb">
						<s>${{ obj.priceOriginal }}</s>
					</span>
					<span class="yuanred">优惠价格</span>
				</p>
				<h4 class="heafrd">{{ obj.title }}</h4>
				<p class="goodiCON">
					<span class="foolr">100%好评!</span>
					<span class="foolr">{{ obj.studyTotal }}人在学习`</span>
				</p>
			</div>
			<ul class="boxlist">
				<li v-for="(item, index) in list" :key="index">
					<span :class="tbrId == index ? 'active' : ''" @click="indexClick(index)">{{ item }}</span>
				</li>
			</ul>
			<image v-if="tbrId == 0" src="https://img.alicdn.com/imgextra/i2/3603079088/O1CN01V8VO2y2H0M5Bx33L3_!!3603079088.jpg" mode="widthFix" style="width: 100%;"></image>

			<ul class="pinglun" v-if="tbrId == 2">
				<li v-for="(item, index) in lunList" :key="index">
					<div class="okimg">
						<div class="leftimgbox"><image class="imgboxheader" :src="item.userImage" mode="widthFix"></image></div>
						<div class="rightboxtxt">
							<h4>{{ item.nickName }}</h4>
							<div class="txtbox">
								<p class="timeP">{{ item.createDate }}</p>
								<p>@</p>
							</div>
						</div>
					</div>
					<p class="title-bls">真的好像笑了我真辜负了啥哈哈哈这他还有谁</p>
					<div class="txtbacklsit">{{ item.content }}</div>
				</li>
			</ul>
			<!-- <template>文章结构 -->
			<div v-if="tbrId == 1">
				<div class="txtTxtlist" v-for="(item, index) in txtlsit" :key="index">
					<div class="tithed">第{{ index + 1 }}章 {{ item.name }}</div>
					<div class="txtboxerj" v-for="(obj, index) in item.sectionList" :key="index">
						<p>{{ obj.name }}</p>
						<p class="shikan" v-if="obj.isFree == 1" @click="looklsit(obj)">试看</p>
					</div>
				</div>
			</div>
			<!--  套餐结构-->
			<div class="taobaolist" v-if="tbrId == 3">
			<hortlsit></hortlsit>
			<div class="boxpay"><p>$4666.8  _8914.8.5$</p><p>购买套餐</p></div>
			</div>
			<div class="bxbttons">
				<span>没有更过数据了</span>
			</div>
		</div>
		<!-- 视频没有弹窗 -->
		<div class="boxviedo1" v-if="flag">
			<div class="headtxt"><div class="backbtn"><span class="iconfont">&#xe601;</span></div> {{srcVioed.name}}</div>
			<div class="bxoVidoe">
				<h3>免费试看 <span @click="coloseV">X</span></h3>
				<video :src="srcVioed.videoUrl" controls loop="true" autoplay="true" show-loading="true"></video>
			</div>
		</div>
		<div  class="bxtn-boxs"><div class="btn-box">立即购买</div></div>
		
	</view>
</template>

<script>
	import hortlsit from "../../components/components/HotList/HotList.vue"
import { reactive, toRefs } from 'vue';
import { indexList, pinglunlist, txttoLisT,taocanlsit,list } from '../../api/api.js';
export default {
	components:{hortlsit},
	setup() {
		const data = reactive({
			listshop:[],
			obj: {},
			list: ['详情', '章节', '评论', '套餐'],
			tbrId: 0,
			lunList: [],
			txtlsit: [],
			srcVioed: {},
			flag:false,
			list1:[]
		});
		list().then(res => {
			console.log(res.data.records);
			data.list1 = res.data.records
		})
		// 套餐数据接口
		taocanlsit().then(res=>{
			console.log(res,'套餐数据');
		})
		// 点击关闭视频弹框
		const coloseV=()=>{
			data.flag=false
		};
		// 点击试看
		const looklsit = (obj) => {
			data.flag=true
			data.srcVioed = obj;
		};
		// 点击返回上个跳转的商品页面
		const backTo = () => {
			uni.navigateBack({
				delta: 1
			});
		};
		// 评论数据接口
		pinglunlist().then(res => {
			data.lunList = res.data;
			// console.log(res, '评论接口数据');
		});
		// 点tabr栏切换内容并且高亮
		const indexClick = i => {
			data.tbrId = i;
		};
		//文章数据接口
		txttoLisT().then(res => {
			data.txtlsit = res.data;
			// console.log(res, '文章接口');
		});

		return {
			coloseV,
			indexClick,
			backTo,
			looklsit,
			...toRefs(data)
		};
	},
	onPageScroll() {},
	// 接受穿过来的数据并进行操作渲染页面信息
	onLoad(options) {
		indexList(options.id).then(res => {
			// console.log(res, '详情页数据');
			this.obj = res.data;
		});
		console.log(options.id, '接受id');
	}
};
</script>

<style lang="scss">
	@font-face {
	  font-family: 'iconfont';  /* Project id 3656445 */
	  src: url('//at.alicdn.com/t/c/font_3656445_7oolu05ce9x.woff2?t=1663923016667') format('woff2'),
	       url('//at.alicdn.com/t/c/font_3656445_7oolu05ce9x.woff?t=1663923016667') format('woff'),
	       url('//at.alicdn.com/t/c/font_3656445_7oolu05ce9x.ttf?t=1663923016667') format('truetype');
	}
	@font-face {
		font-family: 'iconfont';
		src: url('iconfont.woff2?t=1663728065336') format('woff2'),
			url('iconfont.woff?t=1663728065336') format('woff'),
			url('iconfont.ttf?t=1663728065336') format('truetype');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 26px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.boxviedo1{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color:rgb(0, 0, 0, 0.4);
		.headtxt{
			box-sizing: border-box;
			padding: 0 20rpx;
			width: 100%;
			height: 70rpx;
			background: #1c00cf;
			text-align: center;
			line-height: 70rpx;
			color: white;
			font-weight: 700;
			.backbtn{
				float: left;
			}
		}
		.bxoVidoe {
			margin-top: 500rpx;
			width: 100%;
			// display: ;
			text-align: center;
			// position: fixed;
			// top: 800rpx;
			h3 {
				text-align: center;
				color: white;
			}
		}
	}
.bxtn-boxs {
	position: fixed;
	bottom:0;
	width: 100%;
	display: flex;
	justify-content: center;
	background: white;

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
li {
	list-style: none;
}

.bx-content {
	background: white;
	width: 100%;
	height: auto;
	.bxbttons{
		height: 250rpx;
		text-align: center;
		color: lightslategray;
	}
	.taobaolist{
		width: 90%;
		margin: 0 auto;
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.8);
		.boxpay{
			display: flex;
			justify-content: space-between;
		}
		
	}
	.box {
		width: 90%;
		margin: 10rpx auto;
		display: flex;
	
		.img {
			width: 50%;
			margin-right: 10rpx;
	
			img {
				width: 100%;
				height: 152rpx;
				border-radius: 10rpx;
			}
		}
	
		.left {
			width: 50%;
	
			// overflow: hidden;
			// text-overflow: ellipsis;
			// display: -webkit-box;
			// white-space: nowrap; // 默认不换行；
			h5 {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
			}
	
			p {
				margin-top: 10rpx;
	
				img {
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
				}
			}
		}
	}
	.txtTxtlist {
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		.tithed {
			font-weight: 1000;
			font-size: 35rpx;
		}
		.txtboxerj {
			padding: 10rpx;
			margin-top: 20rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;
			border-bottom: 1rpx solid darkgray;
			.shikan {
				color: #1b88ff;
			}
		}
	}
	.pinglun {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		border-radius:10rpx ;
		padding: 40rpx;
		li {
			padding: 15rpx 0;
			// border-top: 0.1px solid gray;
			margin-top: 20rpx;
			width: 100%;
			.okimg {
				display: flex;
				.leftimgbox {
					width: 150rpx;
					height: 150rpx;

					.imgboxheader {
						width: 100rpx;
						// height: 100rpx;
						border-radius: 50%;
					}
				}
				.rightboxtxt {
					flex: 1;
					margin-left: 15rpx;
					.txtbox {
						width: 100%;
						display: flex;
						justify-content: space-between;
						.timeP {
							color: gray;
						}
					}
				}
			}
			.title-bls {
				margin-top: 10rpx;
			}
			.txtbacklsit {
				margin-top: 20rpx;
				background-color: #ffffff;
				color: gray;
			}
		}
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
