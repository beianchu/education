<template>
	<view>
		<!-- <scroll-view class="scroll-view_H"> -->
			<view id="demo1" class="scroll-view-item_H uni-bg-red" style="display: flex;width: auto;">
				<view class="box"  v-for="item in list" :key="item.id">
					<view class="img">
						<img :src="item.mainImage.slice(-3)=='jpg'?`../../../static/${item.mainImage}` :item.mainImage">
					</view>
					<view class="left">
						<h5>{{item.title}}</h5>
						<p><img src="../../../static/static/static/tab/my.png" alt="">{{item.nickName}}</p>
						<p><span>{{item.isFree==1?'免费':item.priceDiscount}}</span> <span>{{item.studyTotal}} 人在学</span>
						</p>
					</view>
				</view>
			</view>
			<!-- <img src="../../../static/static/images/banner1.jpg" alt=""> -->
			<!-- <view id="demo2" class="scroll-view-item_H uni-bg-green">B</view> -->
		<!-- </scroll-view> -->
	</view>
</template>

<script>
	import {
		list
	} from '../../../api/api.js';
	import {
		reactive,
		toRefs
	} from 'vue';
	export default {
		setup() {
			const data = reactive({
				list: []
			})
			list().then(res => {
				console.log(res.data.records);
				data.list = res.data.records
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
	.box {
		width: 90%;
		margin: 10rpx auto;
		display: flex;

		.img {
			width: 100%;
			margin-right: 10rpx;

			img {
				width: 100%;
				height: 152rpx;
				border-radius: 10rpx;
			}
		}

		.left {
			width: 50%;
			font-size: 15rpx;

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

	// .scroll-Y {
	// 	height: 300rpx;
	// }
	scroll-view ::-webkit-scrollbar {
		//下面四个属性，选一个就可
		display: none;
		width: 0;
		height: 0;
		background-color: transparent;
	}

	.scroll-view_H {
		// white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: flex;
		// flex-wrap: wrap;
		width: 1100%;
		// display: inline-block;
		// width: 100%;
		font-size: 36rpx;
	}
</style>
