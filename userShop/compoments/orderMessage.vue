<template>
	<!-- 订单消息通知 -->
	<view class="order-message">
		<view class="order-message-content">
			<template #slot>
				<slot v-if="props.template == 1">
					<view class="template-one public-flex">
						<u-icon name="bell-fill"></u-icon>
						<text class="font-min font-gary">订单已取消</text>
					</view>
				</slot>
			</template>
			<template #slot>
				<slot v-if="props.template == 2">
					<view class="refund-content public-flex font-min font-gary">
						<view class="refund-money-title">
							<text>退款：</text>
							<text>48.84元</text>
						</view>
						<view class="refund-messages">
							<text>退款成功</text>
							<text>></text>
						</view>
					</view>
				</slot>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		template:Number || String
	})
</script>

<style lang="scss" scoped>
	.template-one{
		padding: 20rpx;
		justify-content: flex-start;
		text{
			margin-left: 10rpx;
		}
	}
	
	.refund-content{
		padding: 20rpx;
		justify-content: space-between;
	}
	
	.refund-money-title{
		text{
			&:nth-last-child(1){
				color: black;
			}
		}
	}
	
	.refund-messages{
		text{
			&:nth-last-child(1){
				margin-left: 10rpx;
			}
		}
	}
</style>