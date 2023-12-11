<template>
	<!-- 购物车 -->
	<view class="shopping-cart">
		<view class="shopping-cart-content">
			<view class="shopping-cart-for" v-for="s,k in (props.shoppingCartData as AnyArray)">
				<view class="shopping-cart-list">
					<view class="shopping-cart-image-shopping-title">
						<view class="shopping-cart-image public-flex" @click.stop.prevent="moreSelectChange(s,k)">
							<image class="image-shop-size" :src="s.image" mode="aspectFill"></image>
							<view class="shopping-cart-text">
								<text>{{s.title}}</text>
								<text>></text>
							</view>
							<view class="check"  :class="s.check ? 'actives' : ''"></view>
						</view>
						<view class="shopping-children-for ">
							<view class="children-for public-flex font-min" v-for="n,m in s.children">
								<text>{{n.title}}</text>
								<text>{{n.quantity}}</text>
							</view>
						</view>
						<view class="settlement">
							<view class="settlement-content public-flex">
								<view class="settlement-money font-min">
									<text>共{{s.totalNumber}}件商品，实付</text>
									<text class="font-large">￥{{s.money}}</text>
								</view>
								<view class="settlement-button public-flex">
									<button @click.stop.prevent="deleteShopChange(s,k)">删除商品</button>
									<button @click.stop.prevent="pleaseBillChange(s,k)">去结算</button>
								</view>
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
		shoppingCartData: Array
	})
	
	// 勾选事件
	const emits = defineEmits(['moreSelectChange','deleteShopChange','pleaseBillChange'])
	const moreSelectChange = async (parms:object,index:number) => new Promise(async resolve=>{
		emits('moreSelectChange',parms,index)
	})
	// 删除商品事件
	const deleteShopChange = async (parms:object,index:number) => new Promise(async resolve=>{
		emits('deleteShopChange')
	})
	// 结账商品事件
	const pleaseBillChange = async (parms:object,index:number) => new Promise(async resolve=>{
		emits('pleaseBillChange')
	})
</script>

<style lang="scss" scoped>
	.shopping-cart-image{
		justify-content: flex-start;
		position: relative;
		image{
			border-radius: 10rpx;
		}
		
		.check{
			width: 28rpx;
			height: 28rpx;
			border: 1px solid rgba(0,0,0,0.5);
			border-radius: 1000rpx;
			position: absolute;
			right: 0;
			top: 0;
		}
	}
	
	.shopping-cart-for{
		padding: 20rpx;
		margin-bottom: 10rpx;
	}
	
	.children-for{
		justify-content: space-between;
		margin-bottom: 15rpx;
		text{
			color: rgba(0,0,0,0.5);
		}
	}
	
	.settlement{
		margin-top: 12rpx;
	}
	
	.settlement-money{
		text{
			color: rgba(0,0,0,0.5);
			&:nth-last-child(1){
				color: black;
			}
		}
	}
	
	.settlement-content{
		justify-content: space-between;
		padding-bottom: 20rpx;
	}
	
	.settlement-button{
		button{
			height: 54rpx;
			border-radius: 10rpx 10rpx 10rpx 10rpx;
			border: 2rpx solid #1FADF6;
			background-color: white;
			font-size: 24rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #1FADF6;
			padding: 10rpx 20rpx;
			&::after{
				display: none;
			}
			&:nth-last-child(1){
				background-color: #1FADF6;
				color: white;
				margin-left: 20rpx;
			}
		}
	}
	
	.shopping-children-for{
		margin-top: 25rpx;
	}
	
	.shopping-cart-text{
		margin-left: 10rpx;
	}
</style>