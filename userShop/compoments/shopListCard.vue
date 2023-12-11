<template>
	<!-- 商品列表卡片 -->
	<view class="shop">
		<view class="shop-list-box">
			<view class="shop-list-content">
				<view class="shop-list-for public-flex" v-for="s,k in (props.shopListData as AnyArray)">
					<view class="shop-list-left-image">
						<image :src="s.image" mode="aspectFill"></image>
					</view>
					<view class="shop-list-right">
						<view class="shop-list-title">
							<text>{{s.title}}</text>
						</view>
						<view class="shop-score-and-children public-flex">
							<view class="score font-middle">
								<text>{{s.score}}</text>
								<text>分</text>
							</view>
							<view class="children public-flex font-min">
								<text v-for="l,j in s.children">{{l}}</text>
							</view>
						</view>
						<view class="childrenShop public-flex">
							<view class="childrenShop-for " v-for="n,m in s.childrenShop">
								<image :src="n.image" mode="aspectFill"></image>
								<text>{{n.title}}</text>
								<text>{{s.money}}</text>
								<text>{{s.originMoney}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		shopListData: Array || []
	})
</script>

<style lang="scss" scoped>
	.shop-list-for {
		padding: 20rpx;
		background: white;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
	}

	.shop-list-left-image {
		image {
			height: 276rpx;
			width: 188rpx;
			border-radius: 20rpx;
		}
	}

	.shop-score-and-children {
		margin-bottom: 16rpx;
		margin-top: 4rpx;
		justify-content: flex-start;

		.children {
			border-radius: 10rpx;
			border: 1px solid #FF2E2E;
			margin-left: 10rpx;

			text {
				color: #FF2E2E;
				padding: 0 10rpx;
				position: relative;

				&::after {
					content: '';
					position: absolute;
					right: 0;
					width: 2rpx;
					height: 60%;
					top: 60%;
					transform: translateY(-60%);
					background: #FF2E2E;
				}

				&:nth-last-child(1) {
					&::after {
						display: none;
					}
				}
			}
		}
	}

	.shop-list-right {
		margin-left: 20rpx;
		flex: 1;
	}
	
	.childrenShop{
		justify-content: space-between;
	}

	.childrenShop-for {
		width: 31%;
		&:nth-last-child(1){
			margin-right: 0;
		}
		image {
			height: 96rpx;
			width: 100%;
			border-radius: 10rpx;
		}

		text {
			font-size: 20rpx;

			&:nth-child(3) {
				color: #FF2E2E;
				font-size: 24rpx;
			}

			&:nth-last-child(1) {
				color: rgba(0, 0, 0, 0.5);
				text-decoration: line-through;
			}
		}
	}

	.shop-list-title {
		margin-bottom: 2rpx;
	}

	.score {
		text {
			color: #1FADF6;

			&:nth-last-child(1) {
				font-size: 20rpx;
			}
		}
	}
</style>