<template>
	<view>
		<view class="boxCats">
			<checkbox-group name="哈哈">
				<label>
					<checkbox :value="1" />
					<text></text>
				</label>
			</checkbox-group>

			<image src="../../static/logo.png" mode="" style="width: 200rpx;height: 100rpx;"></image>
			<view class="boxtitle">
				<view class="boxlist">天泰坦基督教的角度讲简单简单</view>
				<view class="boxlist">天泰坦基督教的角度讲简单简单</view>
				<u-number-box v-model="value" @change="valChange"></u-number-box>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
	setup() {
		const data = reactive({
			list:[]
		});
		//点击数量加加
		const valChange = e => {
			console.log('当前值为: ' + e.value);
		};
		return {valChange,...toRefs(data)};
	},
	onLoad() {
		let t=this
		uni.getStorage({
			key: 'catsList',
			success: res=> {
				this.list=res.data
				console.log(res.data,this.list);
			}
		});
	}
};
</script>

<style lang="scss">
.boxCats {
	padding: 20rpx;
	display: flex;
	align-items: center;
}
</style>
