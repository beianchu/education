<template>
	<view class="boxContent">
		<view class="boxSearch">
			<u-input v-model="value" :type="type" :border="border" border style="flex: 3; background: #fff;" @input="listSearch" />
			<u-button style="flex: 0.5; margin-left: 15rpx;" v-show="resList.length>0" @click="resout">取消</u-button>
		</view>
	
		<view class="shopItem">
			<view class="boxtitle" v-show="resList==0">
赞无数据
			</view>
			<view class="itemContet" v-for="item,index in resList" :key="index" @click="ToIndex(item)">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { getSearchList,getSearesList } from '../../api/api.ts';
import { reactive, toRefs } from "vue";
export default {
	setup() {
		const data=reactive({
			listItem:[],
			value:'',
			resList:[]
		})
		getSearchList().then(res => {
			data.listItem=res.message.goods
			console.log(res, '搜索数据接口');
			
		});
		// 搜索事件
		const listSearch=()=>{
			getSearesList(data.value).then(res=>{
				console.log(res,'hhhhhh');
				data.resList=res.message
			})
		}
		// 点击取消按钮
		const resout=()=>{
			data.value=''
			data.resList=[]
		}
		// 点击跳转详情数据页面
		const ToIndex=(item)=>{
			console.log(item);
			uni.navigateTo({
				url:`/pages/shopIndex/shopIndex?id=${item.goods_id}`
			})
		}
		return {
			ToIndex,
			listSearch,
			resout,
			...toRefs(data)
		};
	}
};
</script>

<style lang="scss">
.boxContent {
	width: 100%;
	height: auto;
	background: gainsboro;
	.boxSearch {
		box-sizing: border-box;
		padding: 20rpx;
		display: flex;
		background: white;
	}
	.shopItem {
		.boxtitle{
			width: 100%;
			text-align: center;
		}
		margin-top: 50rpx;
		.itemContet{
			width: 100%;
			line-height: 80rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			border-bottom: 1rpx solid black;
		}
	}
}
</style>
