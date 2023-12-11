<template>
	<!-- 最终价格 -->
	<view class="total">
		<view class="total-content">
			<view class="total-list-content">
				<view class="total-money font-min public-flex" v-for="s,k in (props.shopList as AnyArray)">
					<text v-if="k < 2">{{s.name}}</text>
					<view class="delivery" v-else>
						<text>{{s.name}}</text>
						<text>（骑手配送）</text>
					</view>
					<text>{{s.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		shopList:Array || []
	})
</script>

<style lang="scss" scoped>
	.total-money{
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	.delivery{
		text{
			&:nth-last-child(1){
				color: rgba(0,0,0,0.5);
			}
		}
	}
</style>