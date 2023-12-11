<template>
	<!-- 地址选择 -->
	<view class="address-select">
		<view class="address-select-box">
			<view class="addresss-select-for" @click.stop.prevent="selectChange(s,k)"
				v-for="s,k in (props.addressData as AnyArray)">
				<view class="address-select-check public-flex">
					<view class="check" :class="props.currentIndex == k ?'actives':''">

					</view>
					<view class="address-title">
						<view class="address-icon-title public-flex">
							<view class="address-icon-edit font-middle public-flex">
								<template v-if="s.disabled" #slot>
									<slot>
										<view class="disabled">
											<text>{{s.disabled}}</text>
										</view>
									</slot>
								</template>
								<text>{{s.title}}</text>
							</view>
							<view class="address-edit" @click.stop.prevent="editChange(s)">
								<image v-if="props.image" src="" mode=""></image>
								<u-icon v-else name="edit-pen" :size="props.fontSize"></u-icon>
							</view>
						</view>
						<view class="address-username font-min">
							<text>{{s.username}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		addressData: Array || [],
		fontSize: Number || String,
		radiovalue1: Boolean,
		currentIndex: Number
	})
	const emits = defineEmits(['selectChange', 'editChange'])
	// 选择事件
	const selectChange = async (parms : AnyObject, index : number) => new Promise(async resolve => {
		emits('selectChange', parms, index)
	})
	// 修改选择事件
	const editChange = async (parms : AnyObject) => new Promise(async resolve => {
		emits('editChange', parms)
	})
</script>

<style lang="scss" scoped>
	.address-select-check {
		align-items: flex-start;
		justify-content: flex-start;

		.check {
			width: 28rpx;
			height: 28rpx;
			border-radius: 100rpx;
			border: 1px solid rgba(0, 0, 0, 0.5);
			margin-top: 10rpx;
		}

		.actives {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #1FADF6;

			&::after {
				position: absolute;
				content: '';
				width: 16rpx;
				height: 16rpx;
				background: #1FADF6;
				border-radius: 100rpx;
			}
		}

		.address-title {
			flex: 1;
			margin-left: 10rpx;
		}

		.address-icon-title {
			justify-content: space-between;

		}

		.address-username {
			color: #9E9E9E;
			margin-top: 6rpx;
		}

		.address-icon-edit {
			align-items: flex-start;
		}

		.disabled {
			margin-right: 10rpx;

			text {
				padding: 2rpx 10rpx;
				background: rgba(31, 173, 246, 0.2);
				border-radius: 4rpx 4rpx 4rpx 4rpx;
				font-size: 20rpx;
				color: #1FADF6;
			}
		}
	}

	.addresss-select-for {
		margin-bottom: 30rpx;
	}
</style>