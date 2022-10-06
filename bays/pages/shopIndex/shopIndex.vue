<template>
	<view>
		<!-- 商品详情数据· -->
		<u-swiper :list="obj.pics" name="pics_mid_url" height="500"></u-swiper>
		<view class="price" style="color: red;font-size: 30rpx;font-weight: 700;">{{ obj.goods_price }}价格</view>
		<view class="">{{ obj.goods_name }}</view>
		<view class="">商品介绍</view>
		<u-parse :html="obj.goods_introduce" style="width:100%;height:auto;"></u-parse>
		<uni-goods-nav class="footer" :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
	</view>
</template>

<script lang="ts">
import { getIndexlist } from '../../api/api.ts';
import { reactive, toRefs } from 'vue';
export default {
	setup() {
		const data = reactive({
			loctionList: [],
			list: [],
			obj: {},
			options: [
				{
					icon: 'headphones',
					text: '客服'
				},
				{
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: 'red'
				},
				{
					icon: 'cart',
					text: '购物车',
					info: 2
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		});
		// 点击跳转到购物车页面
		const onClick = e => {
			uni.switchTab({
				url: '/pages/car/car'
			});
			console.log(1);
		};
		// 获取本地数据
		const getLoctionLsit = () => {
			uni.getStorage({
				key: 'catsList',
				success: function(res) {
					data.loctionList = res.data;
					console.log(res.data, '获取本地数据·');
				}
			});
		};
		// 存储本地数据=
		const getBenList = () => {
			uni.setStorage({
				key: 'catsList',
				data: data.loctionList,
				success: function() {
					console.log('success');
				}
			});
		};
		// 点击加入购物车添加数据
		const buttonClick = e => {
			
			let list = {
				name: data.obj.goods_name,
				price: data.obj.goods_price,
				num: 1,
				id: data.obj.cat_one_id,
				flag: false,
				img:data.obj.pics[0].pics_sma_url
			};
			// 获取本地数据·
			getLoctionLsit();
			// console.log(data.loctionList, '金海环境');
			const itemList = data.loctionList.find(item => item.id == data.obj.cat_one_id);
			// if()
			if (itemList) {
				itemList.num++;
				getBenList();
			} else {
				data.loctionList.push(list);
				getBenList();
			}
		};
		return { getBenList, getLoctionLsit, onClick, buttonClick, ...toRefs(data) };
	},
	onLoad(options) {
		getIndexlist(options.id).then(res => {
			this.obj = res.message;
			console.log(res, '详情数据接口');
		});
		console.log(options.id, '商品详情id');
	}
};
</script>

<style lang="scss">
.footer {
	width: 100%;
	position: fixed;
	bottom: 0;
}
</style>
