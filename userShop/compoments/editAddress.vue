<template>
	<!-- 更换地址 -->
	<view class="edit-address">
		<view class="edit-address-content">
			<view class="edit-address-for public-flex" @click.stop.prevent="editSelectChange(s,k)"
				v-for="s,k in (props.editAddress as AnyArray)">
				<view class="edit-title public-flex">
					<text class="font-middle">{{s.address}}</text>
					<text class="font-min color-gary">{{s.username}}</text>
				</view>
				<view class="check public-flex" :class="props.newCurrentIndex == k ? 'active' : ''"></view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		editAddress: Array || [],
		newCurrentIndex: Number
	})

	// 修改选择地址事件
	const emits = defineEmits(['editSelectChange'])
	const editSelectChange = async (parms : AnyObject, index : number) => new Promise(async resolve => {
		emits('editSelectChange', parms, index)
	})
</script>

<style lang="scss" scoped>
	.edit-address-for {
		margin-bottom: 40rpx;
		justify-content: space-between;
	}

	.edit-title {
		flex-direction: column;
		align-items: flex-start;

		.color-gary {
			color: rgba(0, 0, 0, 0.5);
			margin-top: 10rpx;
		}
	}

	.check {
		width: 28rpx;
		height: 28rpx;
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 100rpx;
	}

	.active {
		border: 1px solid #1FADF6;
		position: relative;
		&::after{
			position: absolute;
			content: '';
			width: 16rpx;
			height: 16rpx;
			background: #1FADF6;
			border-radius: 100rpx;
		}
	}
</style>