<template>
	<!-- 店铺详情 -->
	<view class="store-description">
		<view class="store-description-content">
			<view class="store-description-image-and-title">
				<view class="store-descritpion-image public-flex">
					<image
						src="https://images.unsplash.com/photo-1701848734617-192d502be55a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
						mode="aspectFill"></image>
					<view class="store-name">
						<view class="store-collect-content public-flex">
							<view class="store-title">
								<text>原始人烧烤（石平桥店）</text>
							</view>
							<view class="store-collect">
								<view class="collect-text public-flex font-smallest font-gary">
									<u-icon color="rgba(0,0,0,0.2);" name="heart-fill"></u-icon>
									<text>收藏</text>
								</view>
							</view>
						</view>
						<view class="store-collect-person-number-content public-flex">
							<view class="store-evaluate public-flex font-min">
								<view class="store-evaluate-start font-min public-flex">
									<u-icon color="#FF2E2E"  name="star-fill"></u-icon>
									<text>5.0</text>
								</view>
								<view class="store-sale font-gary">
									<text>月销量500</text>
								</view>
							</view>
							<view class="person-numebr font-smallest font-gary">
								<text>1.2w人收藏</text>
							</view>
						</view>
					</view>
				</view>
				<template #template>
					<slot>
						<view class="address-store public-flex">
							<view class="address-store-icon font-min public-flex">
								<u-icon name="map"></u-icon>
								<text>重庆市九龙坡区石坪桥街道青龙村18号附36号</text>
							</view>
							<view class="store-address-phone">
								<u-icon name="phone"></u-icon>
							</view>
						</view>
					</slot>
				</template>
				<template #template>
					<slot>
						<view class="store-image-content">
							<image src="https://images.unsplash.com/photo-1701302282147-24ab31c992f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D" v-for="s,k in 3" mode="aspectFill"></image>
						</view>
					</slot>
				</template>
				<template #template>
					<slot>
						<view class="select-all">
							<view class="select-each font-min public-flex" v-for="s,k in 2">
								<view class="each-title public-flex">
									<u-icon name="info-circle"></u-icon>
									<text>查看商家食品安全档案</text>
								</view>
								<view class="each-right">
									<text>></text>
								</view>
							</view>
						</view>
					</slot>
				</template>
				<template #template>
					<slot>
						<view class="store-business">
							<view class="business-list font-min public-flex" v-for="s,k in 3">
								<u-icon name="info-circle"></u-icon>
								<text>配送服务：骑手配送</text>
							</view>
						</view>
					</slot>
				</template>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
	
	.store-description{
		margin-top: 20rpx;
	}
	
	.store-descritpion-image {
		justify-content: flex-start;

		>image {
			width: 86rpx;
			height: 86rpx;
			background: #D8D8D8;
			border-radius: 10rpx 10rpx 10rpx 10rpx;
		}

		.store-name {
			margin-left: 10rpx;
			flex: 1;
		}

		.store-evaluate-start,
		.store-evaluate {
			justify-content: flex-start;
		}

		.store-evaluate-start {
			color: #FF2E2E;
			position: relative;
			height: 100%;
			padding-right: 14rpx;

			&::after {
				content: '';
				height: 60%;
				width: 2rpx;
				background: rgba(0, 0, 0, 0.3);
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}

		.store-sale {
			margin-left: 10rpx;
		}
	}
	
	.store-collect-content,
	.store-collect-person-number-content{
		justify-content: space-between;
	}
	
	.store-collect-person-number-content{
		margin-top: 4rpx;
	}
	
	.collect-text{
		padding: 8rpx 20rpx;
		background: #F6F6F6;
		border-radius: 10rpx;
		text{
			margin-left: 6rpx;
		}
	}
	
	
	.address-store{
		margin-top: 30rpx;
		justify-content: space-between;
	}
	
	.store-address-phone{
		transform: rotate(265deg);
		position: relative;
		&::after{
			content: '';
			position: absolute;
			left: 0;
			width: 2rpx;
			height: 100%;
			top: 0;
			background: #F6F6F6;
		}
	}


	.address-store-icon{
		text{
			margin-left: 8rpx;
		}
	}
	
	.store-image-content{
		margin-top: 40rpx;
		image{
			width: 180rpx;
			height: 120rpx;
			border-radius: 10rpx;
			margin-right: 10rpx;
		}
	}
	
	.select-each{
		justify-content: space-between;
		padding-bottom: 32rpx;
		margin-top: 32rpx;
		border-bottom: 1px solid rgba(0,0,0,0.03);
		&:nth-last-child(1){
			border-bottom: 0;
		}
	}
	
	.each-title{
		text{
			margin-left: 10rpx;
		}
	}
	
	.business-list{
		justify-content: flex-start;
		padding-bottom: 32rpx;
		margin-top: 32rpx;
		border-bottom: 1px solid rgba(0,0,0,0.03);
		&:nth-last-child(1){
			border-bottom: 0;
		}
		text{
			margin-left: 10rpx;
		}
	}
</style>