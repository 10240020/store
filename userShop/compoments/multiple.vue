<template>
	<!-- 多层评价 -->
	<view class="multiple">
		<view class="multiple-reviews">
			<template #template>
				<slot>
					<view class="multiple-reviews-content">
						<view class="multiple-title public-flex">
							<text class="font-middle">你对骑手满意吗？</text>
							<text class="font-min font-gary">已对骑手匿名</text>
						</view>
						<view class="rider public-flex">
							<view class="rider-image public-flex">
								<image
									src="https://images.unsplash.com/photo-1682685797769-481b48222adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
									mode="aspectFill"></image>
							</view>
							<view class="rider-name public-flex">
								<text class="font-middle">概理快送</text>
								<text class="font-smallest font-gary">今天12:10送达</text>
							</view>
						</view>
						<template #template>
							<slot>
								<view class="select-satisfy">
									<view class="satisfy-classfiy public-flex">
										<view class="satisfy-list font-middle public-flex"
											:class="props.currentindexHeart == k ? 'activebg' : ''"
											@click="selectChangeHeart(s,k)"
											v-for="(s,k) in (props.heartData as AnyArray)">
											<u-icon name="heart" size="25"></u-icon>
											<text>{{s}}</text>
										</view>
									</view>
									<view class="select-satisfy-button public-flex" v-if="props.currentindexHeart== 1">
										<view class="select-statify-for font-min font-gary"
											:class="props.statifyCurrentIndex == k ? 'iconbgColors' : ''"
											@click="statifyChange(s,k)" v-for="s,k in (props.statifyData as AnyArray)">
											<text>{{s}}</text>
										</view>
										<view class="input-satisfy"
											v-if="props.statifyCurrentIndex == props.statifyData.length - 1">
											<textarea name="" id="" cols="30" rows="10" class="font-min"
												placeholder="告诉骑手，激励我们做得更好"></textarea>
										</view>
									</view>
								</view>
							</slot>
						</template>
					</view>
				</slot>
			</template>
			<template #template>
				<slot>
					<view class="store">
						<view class="store-content">
							<view class="store-content-title font-middle public-flex">
								<text>你对商家/菜品满意吗？</text>
								<view class="select-anonymous">
									<template>
										<u-checkbox-group v-model="checkboxValue1" placement="column"
											@change="checkboxChange">
											<u-checkbox belSize="12" shape="circle"
												v-for="(item, index) in checkboxList1" :key="index" :label="item.name"
												:name="item.name">
											</u-checkbox>
										</u-checkbox-group>
									</template>
								</view>
							</view>
							<view class="rider public-flex">
								<view class="rider-image public-flex">
									<image
										src="https://images.unsplash.com/photo-1682685797769-481b48222adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
										mode="aspectFill"></image>
								</view>
								<view class="rider-name public-flex">
									<text class="font-middle">概理快送</text>
								</view>
							</view>
							<view class="score-start">
								<view class="score-start-content font-middle public-flex">
									<text>评分</text>
									<u-rate :count="count" size="24" activeColor="#1FADF6" v-model="value"></u-rate>
								</view>
							</view>
							<view class="store-evaluate">
								<view class="evaluate-content">
									<textarea name="" id="" class="font-min" cols="30" rows="10"
										placeholder="说说你对店家的评价吧"></textarea>
									<view class="uploading-image-and-video font-smallest public-flex">
										<view class="uploading-image public-flex">
											<u-icon size="24" name="photo"></u-icon>
											<text>上传图片</text>
										</view>
										<view class="uploading-video public-flex">
											<u-icon size="24" name="play-circle"></u-icon>
											<text>上传视频</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</slot>
			</template>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { totalType } from "../publicFunction/type";
	const props = defineProps({
		heartData: Array,
		currentindexHeart: Number,
		statifyData: Array,
		statifyCurrentIndex: Number
	})

	const checkboxList1 = ref<totalType['total']>([{
		name: '匿名提交',
		disabled: false
	}])
	const checkboxValue1 = ref<string | number>('')

	// 评价事件 
	const emits = defineEmits(['selectChangeHeart', 'statifyChange'])
	const selectChangeHeart = async (parms : string, index : number) => new Promise(async resolve => {
		emits('selectChangeHeart', parms, index)
	})
	const statifyChange = async (parms : string, index : number) => new Promise(async resolve => {
		emits('statifyChange', parms, index)
	})
</script>

<style lang="scss" scoped>
	.multiple-title,
	.satisfy-classfiy {
		justify-content: space-between;
	}

	.rider {
		justify-content: flex-start;
		margin-top: 38rpx;
		margin-bottom: 20rpx;
	}

	.rider-image {
		image {
			width: 78rpx;
			height: 78rpx;
			border-radius: 10rpx;
		}
	}

	.rider-name {
		flex-direction: column;
		align-items: flex-start;
		margin-left: 10rpx;

		text {
			&:nth-child(1) {
				margin-bottom: 2rpx;
			}
		}
	}

	.satisfy-list {
		width: 48%;
		background: #F6F6F6;
		border-radius: 10rpx;
		padding: 20rpx 0;

		text {
			margin-left: 6rpx;
		}
	}


	.activebg {
		background: rgba(31, 173, 246, 0.2);
		color: #1FADF6;
	}


	.select-statify-for {
		padding: 6rpx 10rpx;
		background: #F6F6F6;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}

	.select-satisfy-button {
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.iconbgColors {
		color: #1FADF6;
		background: rgba(31, 173, 246, 0.2);
	}

	.input-satisfy {
		height: 148rpx;
		margin: 20rpx 0;
		background: #F6F6F6;
		border-radius: 10rpx;
		width: 100%;

		textarea {
			padding: 20rpx;

			&:placeholder {
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}

	.store-content-title {
		justify-content: space-between;
	}

	.score-start-content {
		justify-content: flex-start;
	}

	.uploading-image-and-video {
		justify-content: flex-start;
	}

	.uploading-image {
		margin-right: 20rpx;
	}

	.uploading-image,
	.uploading-video {
		width: 130rpx;
		height: 130rpx;
		border: 1px dashed rgba(0, 0, 0, 0.2);
		border-radius: 10rpx;
		flex-direction: column;

		text {
			margin-top: 10rpx;
		}
	}

	.evaluate-content {
		margin-top: 20rpx;
		padding: 20rpx;
		background: #F6F6F6;
		border-radius: 10rpx;
		textarea {
			&::placeholder {
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}
</style>
<style>
	.u-checkbox__icon-wrap--circle {
		width: 24rpx;
		height: 24rpx;
	}
</style>