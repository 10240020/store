<template>
	<!-- 申诉商家卡片 -->
	<view class="appeal">
		<view class="appeacl-card-content">
			<view class="appeal-title font-min font-gary public-flex">
				<text>原始人烧烤（坪山店）</text>
				<text>订单号 10015231551561325813</text>
				<text>订单状态：商家拒绝退款，等待买家处理</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.appeal{
		padding: 20rpx 0;
	}
	.appeal-title{
		flex-direction: column;
		align-items: flex-start;
		text{
			&:nth-child(1){
				font-size: 32rpx!important;
				color: black!important;
			}
			&:nth-child(2){
				margin: 10rpx 0;
			}
		}
	}
</style>