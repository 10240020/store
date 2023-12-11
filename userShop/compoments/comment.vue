<template>
	<!-- 评论数据 -->
	<view class="comment">
		<view class="comment-box">
			<view class="comment-content-for">
				<view class="comment-for" v-for="s,k in (props.commentData as AnyObject)">
					<view class="comment-top-user-infomation public-flex">
						<view class="comment-user-image">
							<image class="image-min" :src="s.avatar" mode="aspectFill"></image>
						</view>
						<view class="comment-right-text">
							<view class="comment-time-username public-flex">
								<text class="font-middle">{{s.nickname}}</text>
								<text class="font-smallest">{{s.time}}</text>
							</view>
							<view class="comment-score public-flex font-min">
								<u-rate :count="props.count" active-color="#1FADF6" size="13" v-model="props.value"></u-rate>
								<text>{{s.commentText}}</text>
							</view>
						</view>
					</view>
					<view class="comment-textarea">
						<view class="textarea font-min">
							<text>{{s.textarea}}</text>
						</view>
					</view>
					<view class="comment-cart-image ">
						<image :src="n" mode="aspectFill" v-for="n,m in s.children"></image>
					</view>
					<view class="comment-merchant">
						<view class="merchant-text font-min">
							<text>{{s.shopText}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		commentData: Array,
		count: Number,
		value: Number
	})
</script>

<style lang="scss" scoped>
	.comment-content-for{
		padding-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.comment-top-user-infomation {
		justify-content: flex-start;

		.comment-user-image {
			image {
				border-radius: 100rpx;
			}
		}
		.comment-right-text{
			flex: 1;
			margin-left: 20rpx;
		}
		
		.comment-time-username{
			justify-content: space-between;
			text{
				&:nth-last-child(1){
					color: rgba(0,0,0,0.5);
				}
			}
		}
		
		.comment-score{
			justify-content: flex-start;
			text{
				margin-left: 10rpx;
				color: rgba(0,0,0,0.5);
			}
		}
	}
	
	.comment-textarea{
		margin: 20rpx 0;
	}
	
	.comment-cart-image{
		margin-bottom: 20rpx;
		image{
			width: 212rpx;
			height: 212rpx;
			border-radius: 10rpx;
			margin-left: 10rpx;
			&:nth-child(1){
				margin-left: 0;
			}
		}
	}
	
	.comment-merchant{
		.merchant-text{
			background: #F6F6F6;
			padding: 10rpx;
			border-radius: 10rpx;
			text{
				color: rgba(0,0,0,0.5);
			}
		}
	}
</style>
<style>
	.u-rate__content {
		display: flex;
	}
</style>