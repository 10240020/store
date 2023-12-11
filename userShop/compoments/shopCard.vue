<template>
	<!-- 商品卡片 -->
	<view class="shop-card">
		<view class="shop-card-box">
			<view class="shop-card-list" v-for="s,k in (props.parms as AnyArray)">
				<view class="shop-card-content public-flex">
					<view class="shop-card-image public-flex">
						<image class="image-middle" :src="s.image" mode="aspectFill"></image>
					</view>
					<view class="shop-card-right">
						<view class="shop-card-title font-max">
							<text>{{s.title}}</text>
						</view>
						<view class="shop-card-number font-min">
							<text>{{s.number}}</text>
						</view>
						<view class="shop-money public-flex">
							<view class="shop-money-left public-flex">
								<text class="font-large">{{s.money}}</text>
								<text class="font-min">{{s.originMoney}}</text>
							</view>
							<!-- 插槽自定义数据 -->
							<template #slot>
								<slot>
									<view class="right-button public-flex">
										<button @click.stop.prevent="closeChange(s)" class="public-flex">-</button>
										<input disabled type="text" placeholder="123" v-model="s.newNumber" />
										<button @click.stop.prevent="addChange(s)" class="public-flex">+</button>
									</view>
								</slot>
							</template>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	const props = defineProps({
		// 卡片数据
		parms: Array || []
	})
	const emits = defineEmits(['addChange','closeChange'])
	// 添加事件
	const addChange = async (parms) => new Promise(async resolve => {
		emits('addChange',parms)
	})
	// 减少事件
	const closeChange = async (parms) => new Promise(async resolve => {
		if (parms.newNumber > 1) {
			emits('closeChange',parms)
		}
	})
</script>

<style lang="scss" scoped>
	.shop-card-list{
		margin-bottom: 40rpx;
	}
	.shop-card-image {
		image {
			border-radius: 10rpx;
		}
	}

	.shop-card-title {
		text {
			font-weight: 400;
		}
	}

	.shop-card-number {
		margin: 10rpx 0;

		text {
			color: #9E9E9E;
		}
	}

	.shop-money {
		justify-content: space-between;

		.shop-money-left {
			text {
				color: rgba(0, 0, 0, 0.5);

				&:nth-child(1) {
					color: #FF2E2E;
					margin-left: -4rpx;
				}

				&:nth-last-child(1) {
					text-decoration: line-through;
					margin-left: 4rpx;
					margin-top: 6rpx;
				}
			}
		}
	}

	.shop-card-right {
		margin-left: 20rpx;
	}

	.right-button {
		justify-content: flex-end;

		button {
			width: 44rpx;
			height: 44rpx;
			margin: 0;
			background: transparent;
			padding: 0;

			&::after {
				display: none;
			}

			&:nth-last-child(1) {
				background-color: #1FADF6;
				color: white;
			}

			&:nth-child(1) {
				border: 1px solid #1FADF6;
			}
		}

		input {
			width: 15%;
			text-align: center;
		}
	}
</style>