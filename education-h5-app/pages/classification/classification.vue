<template>
	<view>
		<div class="box">
			<div class="txt-head">
				分类
			</div>
			<div class="search">
				<span class="iconfont">&#xe613;</span>
			</div>
		</div>
		<!-- 以上是头部组件 -->
		<div class="box-contet">
			<ul class="box-tabr">
				<li  v-for="item,index in arr" :key="index" @click="idToList(item.id)" :class="chidlId==item.id?'active':''">{{item.name}}</li>
			</ul>
			<div class="contenlist">
				<div class="boxyuan" v-for="item in arrList.labelList" :key="index">{{item.name}}</div>
			</div>
		</div>
	</view>
</template>

<script>
	import {
		swiper
	} from "../../api/api.js"
	import {
		reactive,
		toRefs
	} from "vue"
	export default {
		setup() {
			const data = reactive({
				arr: [],
				chidlId:1,
				arrList:[]
			})
		
			// 点击tabr切换
			const idToList=(id)=>{
				data.chidlId=id
				console.log(1);
					data.arrList=data.arr.find(item=>item.id==id)
			}
			// 获取数据tabr
			
			
			return {
			
				idToList,
				...toRefs(data)
			}
		},
		onLoad() {
			swiper().then(res => {
				console.log(res);
				this.arr=res.data
			
			})
			// uni.showLoading({
			// 	title:"哈哈哈"
			// })
			setTimeout(()=>{this.arrList=data.arr.find(item=>item.id==this.chidlId)},0)
		},
		onLaunch() {
			
		}
	}
</script>

<style lang="scss">
	.active {
		color: #345dc2 !important;
		border-left: 3px solid #345dc2;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.box-contet {
		width: 100%;
		// height: 100%;
		display: flex;

		ul {
			height:calc(90vh - 50rpx);
			background: #f8f9fb;
			width: 150rpx;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: space-evenly;
			// align-items: center;
			justify-content: space-around;
			li {
				
				height: 50rpx;
				font-size: 25rpx;
				list-style: none;
				text-align: center;
				line-height: 50rpx;
				color: darkgray;
			}
		}
		.contenlist{
			
			flex: 1;
			box-sizing: border-box;
			padding: 50rpx;
			// display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: flex-start;
			.boxyuan{
				float: left;
				margin: 10rpx;
				// width: 150rpx;
				height: 50rpx;
				padding: 10rpx 20rpx;
				text-align: center;
				border-radius: 100rpx;
				border: 1px solid black;
			}
		}
	}

	/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
	@font-face {
		font-family: 'iconfont';
		/* Project id 3656445 */
		src: url('//at.alicdn.com/t/c/font_3656445_n4hn48zxqlj.woff2?t=1663748705881') format('woff2'),
			url('//at.alicdn.com/t/c/font_3656445_n4hn48zxqlj.woff?t=1663748705881') format('woff'),
			url('//at.alicdn.com/t/c/font_3656445_n4hn48zxqlj.ttf?t=1663748705881') format('truetype');
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

	.box {
		position: fixed;
		top: 0;
		color: white;
		width: 100%;
		height: 100rpx;
		background-color: #345dc2;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		.txt-head {
			font-weight: 600;
		}

		.search {
			position: absolute;
			right: 10rpx;
			font-size: 25rpx;
			// display: inline-block;
			// float: right;
		}
	}
</style>
