<template>
	<view>
		<div class="boxsearch">
			<myinput style="width: 80%; backgorund:red; position:fixed;left: 70rpx;"></myinput>
		</div>
		<!-- 以上是搜索框！ -->
		<!-- <div style="position: fixed;top:-20rpx; background-color: white;"> -->
			<ul class="boxtabr" >
				<li class="listab" v-for="item in arr" :key="item.id" @click="TOId(item.id)"><span
						:class="tabDI==item.id?'active':''">{{item.name}}</span>
						<div class="xian"></div></li>
			</ul>
		<!-- </div> -->
		<ul class="conetn-box" style="margin-top: 10rpx;">
			<li v-for="item,index in arrtxt" :key="index" @click="indexList">
				<div class="box-tite">
					<h4>{{item.title}}</h4>
					<p style="color: gray;">{{item.summary}}</p>
					<p><span>{{item.nickName}}</span>
						<span>{{new Date(item.updateDate).toLocaleString()}}{{item.viewCount}}赞</span>
					</p>
				</div>
				<div class="boximg" v-show="item.imageUrl!=null">
					<image class="img" :src="item.imageUrl" mode="widthFix" style="width: 200rpx;height: 100%;">
					</image>
				</div>
			</li>
		</ul>
		<div v-if="flag" class="boton-bxo">没有更多了</div>
	<view class="backbox" v-if="flag" @tap="backGo"><span class="iconfont">&#xed53;</span></view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from "vue"
	import myinput from "../../components/components/head-search/head-search.vue"
	// import txtlist from "../../components/components/listTxt/listTxt.vue"
	import {
		readlist,
		txttabList
	} from "../../api/api.js"
	export default {
		components: {
			myinput
			// txtlist
		},

		setup() {
			const data = reactive({
				arr: [],
				arrtxt: [],
				flag: false,
				tabDI: 1

			})
			// 点击跳阅读数据
			const indexList=()=>{
				uni.navigateTo({
					url:'/pages/readLIst/readLIst'
				})
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
			// 获阅读对分类分类接口
			readlist().then(res => {
				// console.log(res, '阅读数据');
				data.arr = res.data
			})
			// 点击tabr
			const TOId = (id) => {
				// 获取文章接口显示
				txttabList().then(res => {
					// console.log(res, '文章数据接口');
					data.arrtxt = res.data.records

				})
				data.tabDI = id
			}
			// 获取文章接口显示
			txttabList().then(res => {
				console.log(res, '文章数据接口');
				data.arrtxt = res.data.records

			})
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
				indexList,
				backGo,
				TOId,
				...toRefs(data)
			}
		},
		onLoad: function(options) {
			setTimeout(function() {
				console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 上拉刷新加载数据
		onReachBottom() {
			if (this.arrtxt.length < 60) {
				// 获取文章接口显示
				txttabList().then(res => {
					// console.log(res, '文章数据接口');
					this.arrtxt = [...res.data.records, ...this.arrtxt]

				})
			} else {
				this.flag = true
			}

		}

	}
</script>

<style lang="scss">
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
	.example {
		// position: fixed;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		height: 150px;
		background-color: #fff;
	}

	.example-body {
		padding: 10px 20px;
		padding-bottom: 0px;
	}

	.transition-button {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		flex: 1;
		margin-bottom: 10px;
	}

	/* #ifndef APP-NVUE */
	.example ::v-deep .transition {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		border-radius: 5px;
		text-align: center;
		background-color: #4cd964;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
	}

	/* #endif */

	.text {
		font-size: 14px;
		color: #fff;
	}
.active::after{
	display: inline-block;
	border:10rpx solid blue;
}
	.active {

		width: 100rpx;
		display: inline-block;
		padding: 0 10rpx;
		border-bottom: 20rpx solid #007aff;
		color: #007aff;

	}

	.boton-bxo {
		width: 100%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		color: gray;
	}

	.conetn-box {
		list-style: none;
		margin: 0;
		padding: 0;
		// position: fixed;
		top: 0;

		li {


			/*强制不换行*/
			margin-top: 10rpx;
			box-sizing: border-box;
			padding: 10rpx;
			display: flex;
			justify-content: space-around;

			.box-tite {
				width: 60%;
				flex: 1;
				vertical-align: middle;

				h4 {
					overflow: hidden;
					/* 超出一行文字自动隐藏 */
					text-overflow: ellipsis;
					/*文字隐藏后添加省略号*/
					white-space: nowrap;
				}

				p {
					overflow: hidden;
					/* 超出一行文字自动隐藏 */
					text-overflow: ellipsis;
					/*文字隐藏后添加省略号*/
					white-space: nowrap;
				}
			}

			.boximg {
				// flex: 1;
				// height:100rpx;
				width: 30%;
				// width: 150rpx;

				.img {
					// width: 100%;
					height: 50rpx;
				}
			}
		}
	}

	.boxsearch {
		z-index: 1;
		position: fixed;
		top: 0;
		background-color: #345dc2;
		width: 100%;
		height: 80rpx;
	}

	.boxtabr {
		z-index: 1;
		overflow: hidden;
		margin-top: 100rpx;
		padding: 0;
		display: flex;
		overflow: hidden;
		white-space: nowrap;
		overflow-x: scroll;

		.listab {
			text-align: center;
			list-style: none;
			// width: 00rpx;
			padding: 0 30rpx;
			height: 50rpx;
			line-height: 50rpx;
			
		}
	}
</style>
