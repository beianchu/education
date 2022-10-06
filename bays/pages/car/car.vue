<template>
	<view>
		<view class="box-border">
			<view class="boxName">张三</view>
			<view class="address-box">北京延庆康庄镇镇西官路</view>
		</view>
		<!-- 购物车数据 -->
		<!-- {{list}} -->
		<view class="boxCats" v-for="(item, index) in list" :key="index">
			<u-checkbox @change="check(item)" v-model="item.flag" :checked="item.flag"></u-checkbox>

			<image :src="item.img.goods_small_logo" mode="widthFix" class="boximg"></image>
			<view class="boxtitle">
				<view class="boxlist">{{ item.name }}</view>
				<view class="boxlist">天泰坦基督教的角度讲简单简单</view>
				<view class="box-title">
					<view class="price-box" style="font-size: 24rpx; font-weight: 600;color: red;">￥{{ item.price }}</view>
					<u-number-box v-model="item.num" @change="valChange(index)"></u-number-box>
				</view>
			</view>
		</view>
		<!-- 底部导航栏数据· -->
		<view class="footer-boxList">
			<u-checkbox @change="checkboxChange" v-model="allOK"></u-checkbox>
			<view class="box-List">
				<view class="box1">合计：{{ priceNum.pricCount }}￥</view>
				<view class="box2">数量:{{ priceNum.numNumber }}个</view>
			</view>
			<button type="warn" class="boxtbn" style="width: 100rpx;">去购买</button>
		</view>
		<!-- 点击步进器 减减 到1时 -->
	</view>
</template>

<script lang="ts">
import { reactive, toRefs, computed } from 'vue';

export default {
	setup() {
		const data = reactive({
			list: [],
			value: '',
			allOK: false
		});
		// 获取本地数据
		uni.getStorage({
			key: 'catsList',
			success: function(res) {
				data.list = res.data;
				console.log(data.list, 'hhahaaaa');
			}
		});
		//价格计算  数量的计算
		const priceNum = computed(() => {
			let pricCount = 0;
			let numNumber = 0;
			data.list.forEach(item => {
				if (item.flag == true) {
					pricCount += item.price * item.num;
					numNumber += item.num;
				}
			});
			return { pricCount, numNumber };
		});

		// 点击单选
		const check = item => {
			// console.log(data.list);
			item.flag = !item.flag;
			//
			setTimeout(() => {
				data.allOK = data.list.every(item => item.flag == true);
			}, 0);
		};
		// 点击全选 全部不选
		const checkboxChange = e => {
			data.allOK = e.value;
			data.list.forEach(item => {
				item.flag = data.allOK;
			});
		};
		//点击数量变化
		const valChange = index => {
			if (data.list[index].num == 0) {
				// console.log(1);
				uni.showModal({
					title: '提示',
					content: '确定要移除商品么？',
					success: function(res) {
						if (res.confirm) {
						// setTimeout(()=>{
								data.list.splice(index,1)
						// },0)
							console.log('用户点击确定');
						} else if (res.cancel) {
							data.list[index].num = 1
							console.log('用户点击取消');
						}
					}
				});
			}
			// console.log('当前值为: ' + e.value);
		};
		return {
			priceNum,
			check,
			checkboxChange,
			valChange,
			...toRefs(data)
		};
	}
};
</script>

<style lang="scss">
.footer-boxList {
	position: fixed;
	bottom: 0;
	width: 100%;
	// height: 150rpx;
	display: flex;
	align-items: center;
	.allCheck {
		flex: 1;
	}
	.box-List {
		flex: 3;
	}
	.boxtbn {
		flex: 1;
	}
}
.box-border {
	margin-top: 10rpx;
	width: 100%;
	height: 150rpx;
	border-top: 1rpx solid deepskyblue;
	border-bottom: 1rpx solid deeppink;
}
.boxCats {
	padding: 20rpx;
	display: flex;
	align-items: center;
	.boximg {
		width: 150rpx;
		height: 150rpx;
	}

	.boxtitle {
		margin-left: 10rpx;
		flex: 1;
		.box-title {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
