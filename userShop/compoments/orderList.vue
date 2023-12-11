<template>
	<!-- 订单商品列表 -->
	<view class="order-list">
		<view class="order-list-content">
			<view class="order-for-list" v-for="s,k in (props.orderData as AnyArray)">
				<view class="order-each-content public-flex">
					<view class="order-each-image">
						<image class="image-normal" :src="s.image" mode="aspectFill"></image>
					</view>
					<view class="order-each-right">
						<view class="each-title public-flex">
							<view class="title-discount public-flex">
								<text class="font-smallest public-flex">折</text>
								<text class="font-min">{{s.title}}</text>
							</view>
							<view class="order-origin-money font-smallest">
								<text>{{s.money}}</text>
							</view>
							<view class="order-new-money font-min">
								<text>{{s.newmoney}}</text>
							</view>
						</view>
						<view class="order-each-number font-smallest">
							<text>{{s.newnumber}}</text>
						</view>
						<view class="oeder-each-total-number font-smallest">
							<text>{{s.totalnumber}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		// 数据
		orderData: Array || []
	})
</script>

<style lang="scss" scoped>
	.order-each-image {
		image {
			border-radius: 10rpx;
		}
	}
	
	.order-each-right{
		margin-left: 10rpx;
	}

	.title-discount {
		text {
			&:nth-child(1) {
				color: white;
				display: block;
				width: 26rpx;
				height: 26rpx;
				background: #1FADF6;
				padding: 4rpx;
				text-align: center;
				margin-right: 8rpx;
			}
		}
	}
	.order-origin-money{
		margin: 0 20rpx;
		text{
			color: rgba(0,0,0,0.5);
		}
	}
	
	.oeder-each-total-number,
	.order-each-number{
		text{
			color: rgba(0,0,0,0.5);
		}
	}
	
	.order-each-number{
		margin: 8rpx 0;
	}
	
	.order-for-list{
		margin-bottom: 10rpx;
	}
</style>