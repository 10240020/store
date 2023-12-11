<template>
	<!-- 配送方式 -->
	<view class="delivery">
		<view class="delivery-box">
			<view class="delivery-content-select public-flex">
				<view class="delivery-for public-flex" @click="deliverChange(s,k)" :class="props.deliverCurrentIndex == k ? 'select-actives' : ''" v-for="s,k in (props.deliveryData as AnyArray)">
					<text>{{s}}</text>
				</view>
			</view>
			<!-- 无地址数据 -->
			<view class="no-address" v-if="props.deliverCurrentIndex == 0">
				<view class="no-address-content public-flex" @click.stop.prevent="addAddressChange">
					<view class="no-address-icon-and-text public-flex">
						<image src="" mode="" v-if="props.deliverAddressData == false"></image>
						<u-icon name="plus-circle" v-else color="#1FADF6" size="16"></u-icon>
						<text class="font-color font-middle">新增收货地址</text>
					</view>
					<view class="no-address-select">
						<text>></text>
					</view>
				</view>
			</view>
			<!-- 有地址数据 -->
			<view class="have-address" v-if="props.deliverCurrentIndex == 0">
				<view class="have-address-content" v-if="props.deliverAddressData == true">
					<view class="have-address-title-and-text public-flex">
						<view class="address-text-box public-flex">
							<text class="font-color font-middle">金华园小区-A栋-7-01</text>
							<text class="font-min">李 先生 17823106360</text>
						</view>
						<view class="address-select">
							<text>></text>
						</view>
					</view>
				</view>
			</view>
			<!-- 到店取货 -->
			<view class="to-shop public-flex" v-if="props.deliverCurrentIndex == 1 && props.deliverAddressData == true">
				<view class="to-shop-content">
					<view class="store-address">
						<view class="store-title font-large font-color">
							<text>原始人烧烤（石坪桥店）</text>
						</view>
						<view class="store-list public-flex">
							<view class="store-time">
								<text class="font-smallest">自取时间</text>
								<view class="store-select-time arrow-right font-middle">
									<text>15:20</text>
									<text>></text>
								</view>
							</view>
							<view class="store-time">
								<text class="font-smallest">预留电话</text>
								<view class="store-text-content font-middle public-flex">
									<view class="store-select-time phone-select public-flex" @click="selectAreaCodeChange">
										<text>+86</text>
										<u-icon size="8" name="arrow-down-fill"></u-icon>
									</view>
									<view class="store-select-time phone-edit public-flex">
										<text>17823106360</text>
										<u-icon name="edit-pen"></u-icon>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="store-map">
					<view class="store-map-content">
						<!-- <map :latitude="31.231706" :width="100" :height="65" :longitude="121.472644"></map> -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		deliveryData:Array,
		deliverCurrentIndex:Number,
		deliverAddressData:Boolean
	})
	
	// 选择方式
	const emits = defineEmits(['deliverChange','addAddressChange','selectAreaCodeChange'])
	const deliverChange = async (parms:string,index:number) => new Promise(async resolve=>{
		emits('deliverChange',index)
	})
	const addAddressChange = async () => new Promise(async resolve=>{
		emits('addAddressChange')
	})
	const selectAreaCodeChange = async () => new Promise(async resolve=>{
		emits('selectAreaCodeChange')
	})
</script>

<style lang="scss" scoped>
	.delivery-content-select{
		width: 100%;
		justify-content: space-between;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background: #F6F6F6;
		overflow: hidden;
	}
	
	.delivery-for{
		width: 50%;
		padding: 16rpx 0;
		color: black;
	}
	
	.select-actives{
		background: #0BA9F8;
		color: white;
	}
	
	.no-address-content{
		justify-content: space-between;
		padding: 20rpx;
	}
	
	.no-address-icon-and-text{
		text{
			margin-left: 10rpx;
		}
	}
	
	
	.have-address{
		padding: 20rpx;
	}
	
	.address-text-box{
		flex-direction: column;
		align-items: flex-start;
		color: rgba(0,0,0,0.5);
	}
	
	.have-address-title-and-text{
		justify-content: space-between;
	}
	
	
	.to-shop{
		justify-content: space-between;
	}
	
	.store-map-content{
		width: 200rpx;
		height: 130rpx;
		overflow: hidden;
		border-radius: 10rpx;
	}
	
	.to-shop-content{
		padding: 20rpx;
	}
	
	.store-time{
		&:nth-last-child(1){
			margin-left: 20rpx;
		}
		>text{
			color: rgba(0,0,0,0.5);
		}
	}
	
	.store-list{
		justify-content: flex-start;
	}
	
	.phone-select{
		text{
			margin-right: 4rpx;
		}
	}
	
	.phone-edit{
		margin-left: 8rpx;
	}
	
	.arrow-right{
		text{
			&:nth-last-child(1){
				margin-left: 4rpx;
			}
		}
	}
</style>