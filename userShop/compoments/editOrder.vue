<template>
	<!-- 修改订单信息 -->
	<view class="edit">
		<view class="edit-order">
			<view class="edit-order-list font-min public-flex" v-for="s,k in (props.editOrderData as AnyArray)">
				<view class="edit-left">
					<text>{{s.name}}</text>
				</view>
				<view class="edit-right">
					<text>{{s.text}}</text>
					<image src="" mode="" class="image-arrow-size"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		editOrderData: Array || []
	})
</script>

<style lang="scss" scoped>
	.edit-order-list{
		justify-content: space-between;
		margin-bottom: 20rpx;
		margin-top: 20rpx;
	}
</style>