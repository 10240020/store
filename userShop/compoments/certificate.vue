<template>
	<!-- 上传凭证 -->
	<view class="certificate">
		<view class="certificate-uploading">
			<view class="certificate-title">
				<text>上传证据</text>
				<text>*</text>
			</view>
			<view class="certificate-uploading-list public-flex">
				<view class="uploading-for font-min font-gary public-flex" @click="uploadingChange" v-for="s,k in 3">
					<u-icon name="photo" size="30"></u-icon>
					<text>上传图片</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		uploadingData:Array
	})
	const emits = defineEmits(['uploadingChange'])
	const uploadingChange = async () => new Promise(async resolve=>{
		emits('uploadingChange')
	})
</script>

<style lang="scss" scoped>
	.certificate-uploading-list{
		justify-content: space-between;
	}
	.uploading-for{
		flex-direction: column;
		width: 222rpx;
		height: 222rpx;
		background: #F6F6F6;
		border-radius: 10rpx;
	}
	
	.certificate-title{
		margin-bottom: 20rpx;
		text{
			&:nth-last-child(1){
				color: red;
			}
		}
	}
</style>