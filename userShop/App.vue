<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.public-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}


	/* 文字大小 */
	.font-smallest{
		font-size: 20rpx;
	}
	
	.font-min {
		font-size: 24rpx;
	}

	.font-middle {
		font-size: 28rpx;
	}

	.font-normal {
		font-size: 32rpx;
	}

	.font-max {
		font-size: 34rpx;
	}

	.font-large {
		font-size: 36rpx;
	}

	// 图片大小
	.image-min {
		width: 80rpx;
		height: 80rpx;
	}

	.image-normal {
		width: 106rpx;
		height: 106rpx;
	}
	
	.image-shop-size{
		width: 112rpx;
		height: 112rpx;
	}

	.image-middle {
		width: 150rpx;
		height: 150rpx;
	}
	
	// 箭头图片大小
	.image-arrow-size{
		width: 14rpx;
		height: 8rpx;
	}
	
	
	// 字体颜色 
	.font-color{
		color: #1FADF6;
		background: white;
	}
	.font-gary{
		color: rgba(0,0,0,0.5);
	}
	// 按钮背景颜色
	.button-color{
		background: #1FADF6;
		color: white;
	}
	
	
	
	// 选择框
	.actives{
		border: 1px solid #1FADF6!important;
		display: flex;
		align-items: center;
		justify-content: center;
		&::after{
			border-radius: 100rpx;
			width: 16rpx;
			height: 16rpx;
			content: '';
			position: absolute;
			background: #1FADF6;
		}
	}
</style>