<template>
	<!-- 规格选择 -->
	<u-popup mode="center" :customStyle="{
		margin: '0 40rpx;'
	}" @close.stop.prevent="closeChange" round="10" :show="props.selectPopup">
		<view class="specification">
			<view class="specification-box">
				<view class="specification-title public-flex font-large">
					<text>{{props.specificationData.title}}</text>
				</view>
				<view class="specification-classfiy custom-top">
					<view class="specification-classfiy-title font-min">
						<text>{{props.specificationData.text}}</text>
					</view>
					<view class="specification-text-for public-flex font-min">
						<text @click.stop.prevent="currentIndexChange(k)"
							:class="props.specificationCurrentIndex == k ? 'actives' : ''"
							v-for="s,k in props.specificationData.children">{{s}}</text>
					</view>
				</view>
				<view class="specification-classfiy tow-custom-top">
					<view class="specification-classfiy-title font-min">
						<text>{{props.specificationData.level}}</text>
					</view>
					<view class="specification-text-for public-flex font-min">
						<text :class="props.towCurrentIndex == k ? 'actives' : ''" @click.stop.prevent="towCurrentIndexChange(k)"
							v-for="s,k in props.specificationData.towChildren">{{s}}</text>
					</view>
				</view>
				<view class="already">
					<view class="already-content font-smallest">
						<text>已选规格：</text>
						<text>{{props.chosen}}、{{props.chosenTow}}</text>
					</view>
				</view>
				<view class="bottom-money-and-add-shopCard public-flex">
					<view class="bottom-money public-flex">
						<view class="bottom-total-money font-middle">
							<text>总计 </text>
						</view>
						<view class="bottom-total-money-number ">
							<text>￥</text>
							<text class="font-large">0</text>
						</view>
					</view>
					<view class="bottom-add-shopCard">
						<view class="bottom-button-shopCard font-smallest public-flex">
							<button @click.stop.prevent="addShopCardChange(props.specificationData)">
								<template #slot>
									<slot></slot>
								</template>
							</button>
							<button class="font-smallest" @click.stop.prevent="settlementChange">去结算</button>
						</view>
					</view>
				</view>
			</view>
			<view class="position-offset public-flex">
				<image src="" mode="" v-if="offset"></image>
				<u-icon @click.stop.prevent="closeChange" name="close-circle" color="white" size="24"></u-icon>
			</view>
		</view>
	</u-popup>
</template>

<script lang="ts" setup>
	const props = defineProps({
		selectPopup: Boolean,
		specificationData: Object,
		specificationCurrentIndex: Number,
		towCurrentIndex:Number,
		chosenTow:String,
		chosen:String
	})

	const emits = defineEmits(['closeChange', 'addShopCardChange', 'settlementChange', 'currentIndexChange', 'towCurrentIndexChange'])
	const closeChange = async () => new Promise(async resolve => {
		emits('closeChange')
	})
	// 添加购物车
	const addShopCardChange = async (parms : object) => new Promise(async resolve => {
		emits('addShopCardChange', parms)
	})
	// 去结算
	const settlementChange = async () => new Promise(async resolve => {
		emits('settlementChange')
	})
	// 选择规格切换
	const currentIndexChange = async (index:number) => new Promise(async reolve => {
		emits('currentIndexChange',index)
	})
	// 二级规格切换
	const towCurrentIndexChange = async (index:number) => new Promise(async resolve => {
		emits('towCurrentIndexChange',index)
	})
</script>

<style lang="scss" scoped>
	.specification-box {
		.specification-title {
			margin: 0 20rpx;
			margin-top: 24rpx;

			text {
				font-weight: 400;
			}
		}

		.custom-top {
			margin: 0 20rpx;
			margin-top: 60rpx;
		}

		.tow-custom-top {
			margin: 0 20rpx;
			margin-top: 50rpx;
		}

		.specification-classfiy-title {
			margin-bottom: 16rpx;
			text {
				color: #9E9E9E;
			}
		}

		.specification-text-for {
			justify-content: flex-start;
			flex-wrap: wrap;

			text {
				margin-right: 15rpx;
				width: 15%;
				padding: 10rpx 20rpx;
				border: 1px solid rgba(0, 0, 0, 0.05);
				text-align: center;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
			}
		}


		.bottom-button-shopCard {
			button {
				height: 60rpx;
				display: flex;
				align-items: center;
				padding: 0 10rpx;
				&:nth-child(1){
					margin-right: 30rpx;
				}
				&:nth-last-child(1){
					padding: 0 20rpx;
				}
			}
		}
		
		
		.already-content{
			padding: 12rpx 0;
			padding-left: 24rpx;
			background: rgba(0,0,0,0.05);
			margin-top: 80rpx;
			border-top: 1px solid rgba(0,0,0,0.05);
			border-bottom: 1px solid rgba(0,0,0,0.05);
			margin-bottom: 30rpx;
			text{
				&:nth-child(1){
					color: rgba(0,0,0,0.5);
				}
			}
		}
	}
	
	.bottom-money-and-add-shopCard{
		justify-content: space-between;
		margin: 0 20rpx;
		padding-bottom: 20rpx;
	}
	
	.bottom-button-shopCard{
		button{
			color: white;
			&::after{
				display: none;
			}
			&:nth-child(1){
				background: #1FADF6;
			}
			&:nth-child(2){
				background: #0BA9F8;
			}
		}
	}
	
	.bottom-total-money{
		text{
			color: #9E9E9E;
		}
	}
	
	.bottom-total-money-number{
		text{
			color: #FF2E2E;
		}
	}
	
	
	.position-offset{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -10%;
	}


	.actives {
		border: 1px solid #1FADF6;
		background: rgba(31, 173, 246, 0.2);
		color: #1FADF6;
	}
</style>