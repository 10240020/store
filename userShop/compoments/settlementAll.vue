<template>
	<!-- 结算 -->
	<view class="settlement">
		<view class="settlement-content public-flex">
			<view class="settlement-total-and-all-select ">
				<view class="settlement-top-check-and-totalnumber public-flex" @click="selectAllChange(props.selectShow)">
					<view class="check" :class="props.selectShow ? 'actives' : ''" >
						
					</view>
					<view class="all-select-title">
						<text class="font-middle">全选</text>
						<text class="font-smallest">(已选{{props.totalNumber}}件)</text>
					</view>
				</view>
				<view class="total-all-money font-min">
					<text>合计：</text>
					<text class="font-color">￥{{props.totalMoneys}}</text>
				</view>
			</view>
			<view class="all-button public-flex">
				<button class="font-min font-color" @click="delectShopChange">删除商品</button>
				<button class="button-color font-min" @click="settlementAllChange">去结算</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		selectShow:Boolean,
		totalMoneys:Number || String,
		totalNumber:Number || String
	})
	
	const emits = defineEmits(['selectAllChange','delectShopChange','settlementAllChange'])
	const selectAllChange = async (parms:boolean) => new Promise(async resolve=>{
		emits('selectAllChange',parms)
	})
	const delectShopChange = async () => new Promise(async resolve=>{
		emits('delectShopChange')
	})
	const settlementAllChange = async () => new Promise(async resolve=>{
		emits('settlementAllChange')
	})
</script>

<style lang="scss" scoped>
	
	.check{
		width: 28rpx;
		height: 28rpx;
		border: 2rpx solid rgba(0,0,0,0.5);
		border-radius: 100rpx;
	}
	
	.settlement-content{
		justify-content: space-between;
	}
	
	.all-select-title{
		margin-left: 10rpx;
		text{
			&:nth-last-child(1){
				margin-left: 10rpx;
			}
		}
	}
	
	.all-button{
		button{
			border-radius: 10rpx;
			border: 1px solid #1FADF6;
			&:nth-child(1){
				margin-right: 30rpx;
			}
		}
	}
</style>