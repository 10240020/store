<template>
	<!-- 退款原因 -->
	<view class="refund">
		<view class="refund-content">
			<view class="refund-title public-flex" v-if="props.unnecessary">
				<view class="refund-left-title font-middle">
					<text>退款原因</text>
				</view>
				<view class="refund-select-text font-min">
					<text class="font-color">必选</text>
					<text v-if="props.selectContent"></text>
					<text>></text>
				</view>
			</view>
			<template #template>
				<slot v-if="props.templateRefund">
					<view class="textarea-input-template font-min">
						<textarea name="" id="" v-model="textChange" maxlength="200"  height="135"
							placeholder="补充退款原因，有利于商家更快的帮您处理"></textarea>
						<view class="mark-text">
							<text>{{textNumber}}</text>
							<text class="font-gary">/200</text>
						</view>
					</view>
				</slot>
			</template>
			<view class="uploading" v-if="props.unnecessary">
				<view class="uploading-images">
					<view class="uploading-image-text public-flex" @click.stop.prevent="uploadingChange">
						<u-icon name="photo" size="24"></u-icon>
						<text class="font-smallest font-gary">上传凭据</text>
					</view>
					<view class="uploading-text font-min font-gary">
						<text>上传真实照片证据可协助商家准确判断，提高退款效率</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
	const props = defineProps({
		unnecessary: Boolean,
		templateRefund: Boolean
	})
	
	const textChange = ref<string>('')
	const textNumber = ref<number>(0)
	
	watch(textChange,(originText)=>{
		textNumber.value = originText.split('').length
	})

	// 上传事件
	const emits = defineEmits(['uploadingChange'])
	const uploadingChange = async () => new Promise(async resolve => {
		emits('uploadingChange')
	})
</script>

<style lang="scss" scoped>
	.uploading-image-text {
		border: 1px dashed rgba(0, 0, 0, 0.2);
		height: 102rpx;
		width: 102rpx;
		flex-direction: column;
		border-radius: 10rpx;
		padding: 0 4rpx;
		padding-right: 7rpx;

		text {
			margin-top: 4rpx;
		}
	}

	.uploading-text {
		margin-top: 10rpx;
	}

	.textarea-input-template {
		position: relative;
		background: #F6F6F6;
		height: 270rpx;
		border-radius: 10rpx;
		overflow: hidden;
		padding: 20rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		&:placeholder {
			color: rgba(0, 0, 0, 0.5);
		}

		textarea {
			width: 100%;
		}
	}

	.mark-text {
		position: absolute;
		right: 20rpx;
		bottom: 20rpx;
	}
	
	.refund-title{
		justify-content: space-between;
	}
	
	.refund-select-text{
		text{
			&:nth-child(1){
				margin-right: 20rpx;
			}
		}
	}
</style>