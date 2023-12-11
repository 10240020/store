<template>
	<!-- 申诉状态 -->
	<view class="appeal-status">
		<view class="appeal-status-content">
			<template #template>
				<slot>
					<view class="init font-smallest font-gary public-flex"
						:class="props.editBackground == 1 ? 'bgcolor' : props.editBackground == 2 ? 'gncolor' : 'rdcolor'">
						<text>平台处理中</text>
						<text>预计48小时内完成审核</text>
					</view>
				</slot>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		editBackground: Number || String
	})
</script>

<style lang="scss" scoped>
	.init {
		padding: 20rpx;
		height: 118rpx;
		flex-direction: column;
		align-items: flex-start;

		text {
			&:nth-child(1) {
				color: black !important;
				font-size: 28rpx !important;
				margin-bottom: 10rpx;
			}
		}
	}

	.bgcolor {
		background: linear-gradient(180deg, #EEFAFF 0%, #FFFFFF 51%);
	}

	.gncolor {
		background: linear-gradient(180deg, #EEFFF3 0%, #FFFFFF 51%);
	}

	.rdcolor {
		background: linear-gradient(180deg, #FFEEEE 0%, #FFFFFF 51%);
	}
</style>