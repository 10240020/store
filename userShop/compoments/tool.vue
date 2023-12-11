<template>
	<!-- 工具 -->
	<view class="tool"  v-if="props.parms.length > 0 && props.parms">
		<view class="tool-list public-flex font-min custom-flex">
			<view class="tool-list-each" @click.stop.prevent="onChange(s,k)" v-for="s,k in (props.parms as AnyArray)">
				<!-- 模板插入 -->
				<template #slot>
					<slot>
						<view class="tool-box public-flex">
							<image :src="s.logo" v-if="s.logo" :class="['image-size']" mode=""></image>
							<u-icon v-else :name="s.icon" :size="props.size" :color="props.color"></u-icon>
							<text class="font-min">{{s.name}}</text>
						</view>
					</slot>
				</template>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	const props = defineProps({
		// 图标渲染数据
		parms: Array,
		// 图标大小
		size:Number || String,
		// 图标颜色
		color:String,
	})
	// 传出事件
	const emits = defineEmits(['onChange'])
	interface parms{
		name?:string,
		icon?:string
	}
	const onChange = async (parms:parms) => new Promise(async resolve=>{
		return resolve(emits('onChange',parms))
	})
</script>

<style lang="scss" scoped>
.tool-list{
	flex-wrap: wrap;
}
.tool-list-each{
	width: 25%;
	margin-bottom: 44rpx;
	.tool-box{
		flex-direction: column;
		text{
			margin-top: 12rpx;
		}
	}
}
.custom-flex{
	justify-content: flex-start;
}
</style>