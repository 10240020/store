<template>
	<!-- 订单状态卡片模板 -->
	<view class="order-status-template">
		<view class="order-template">
			<template #template>
				<slot v-if="props.orderTemplate == 1">
					<view class="order-template-card">
						<view class="template-top-title public-flex">
							<text class="font-middle">预计送达时间</text>
							<text class="font-min font-gary">外卖配送</text>
						</view>
						<view class="service-time font-large">
							<text>10:20-10:30</text>
						</view>
						<view class="sales-list public-flex">
							<view class="sales-for font-min public-flex" v-for="s,k in (props.salesData as AnyArray)">
								<!-- <image :src="s.name" mode=""></image> -->
								<u-icon :color="k==2?'#1FADF6' : ''" size="24" :name="s.name"></u-icon>
								<text :class="k==2 ? 'font-color' : ''">{{s.text}}</text>
							</view>
						</view>
					</view>
				</slot>
			</template>
			<template #template>
				<slot v-if="props.orderTemplate == 2">
					<view class="cancel-order">
						<view class="cancel-order-content">
							<view class="cancel-order-title font-middle">
								<text>支付超时，订单已取消</text>
							</view>
							<view class="cancel-order-center public-flex font-min">
								<u-icon name="plus-circle" size="20"></u-icon>
								<text>再来一单</text>
							</view>
						</view>
					</view>
				</slot>
			</template>
			<template #template>
				<slot v-if="props.orderTemplate == 3">
					<view class="completed">
						<view class="completed-content public-flex">
							<text class="font-middle">感谢您对概理生活的信任，期待您再次光临</text>
							<text class="font-smallest font-gary">温馨提示：请厉行节约，拒绝浪费。</text>
						</view>
						<view class="completed-for public-flex">
							<view class="completed-for-list public-flex font-min" v-for="s,k in (props.completedData as AnyArray)">
								<u-icon size="26" :name="s.name"></u-icon>
								<text>{{s.text}}</text>
							</view>
						</view>
					</view>
				</slot>
			</template>
			<template #template>
				<slot v-if="props.orderTemplate == 4">
					<view class="completed">
						<view class="completed-content public-flex">
							<text class="font-middle">本次订单已退款，期待再次光临</text>
						</view>
						<view class="completed-for public-flex">
							<view class="completed-for-list public-flex font-min" v-for="s,k in (props.completedData as AnyArray)">
								<u-icon size="26" :name="props.orderTemplate == 4 ? s.name == 'file-text' ? 'more-circle' : s.name : ''"></u-icon>
								<text>{{props.orderTemplate == 4 ? s.text == '评价订单' ? '联系商家' : s.text : ''}}</text>
							</view>
						</view>
					</view>
				</slot>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		orderTemplate: Number,
		salesData: Array,
		completedData:Array
	})
</script>

<style lang="scss" scoped>
	.order-template-card,
	.cancel-order,
	.completed{
		padding: 20rpx;
	}

	.sales-list {
		justify-content: space-between;
		margin: 0 64rpx;

		.sales-for {
			flex-direction: column;

			text {
				margin-top: 15rpx;
			}
		}
	}

	.template-top-title {
		justify-content: space-between;

		text {
			&:nth-last-child(1) {
				padding: 4rpx 10rpx;
				border: 1px solid rgba(0, 0, 0, 0.5);
				border-radius: 10rpx;
			}
		}
	}

	.service-time {
		margin-top: 10rpx;
		margin-bottom: 40rpx;
	}

	.cancel-order-center {
		flex-direction: column;
		margin-top: 40rpx;
	}
	
	
	.completed-content{
		flex-direction: column;
		align-items: flex-start;
	}
	
	.completed-for{
		justify-content: space-between;
		margin: 0 110rpx;
		margin-top: 40rpx;
	}
	
	.completed-for-list{
		flex-direction: column;
		text{
			margin-top: 10rpx;
		}
	}
</style>