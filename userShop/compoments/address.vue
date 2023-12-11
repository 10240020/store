<template>
	<!-- 地址 -->
	<view class="address">
		<view class="address-content">
			<view class="addres-list" v-for="s,k in (props.addressData as AnyArray)">
				<view class="addres-text font-min public-flex">
					<text>{{s.name}}</text>
					<text>{{s.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		addressData: Array || []
	})
</script>

<style lang="scss" scoped>
	.addres-list {
		margin-bottom: 20rpx;
	}

	.addres-text {
		justify-content: space-between;

		text {
			&:nth-child(1) {
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}
</style>