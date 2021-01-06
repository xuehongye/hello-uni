<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="item in tips" :key="item.id" :class="currentIndex === item.id ? 'active' : ''" @click="changeIndex(item)">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view v-for="(item, index) in secondLists" :key="index">
				<image :src="item.imgUrl" mode="" @click="previewImage(index)"></image>
				<text>{{item.title}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { getTips } from '../../util/config.js'
	export default {
		data() {
			return {
				currentIndex: 0,
				tips: [],
				secondLists: []
			}
		},
		created() {
			this.getTips()
		},
		methods: {
			async getTips() {
				const data = await this.$myRequest(getTips)
				if(data.status === 0) {
					this.tips = data.message
					this.currentIndex = this.tips[0].id
					this.secondLists = this.tips[0].secondLists
				} else {
					uni.showToast({
						duration: 1000,
						icon: 'none',
						title: '暂无数据'
					})
				}
			},
			changeIndex(item) {
				this.currentIndex = item.id
				this.secondLists = item.secondLists
			},
			previewImage(current) {
				const urls = this.secondLists.map(item => item.imgUrl)
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	height: 100vh;
}
.pics{
	height: 100vh;
	display: flex;
	.left{
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view{
			height: 120rpx;
			line-height: 120rpx;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee
		}
		.active{
			background: $shop-color;
			color: #fff;
		}
	}
	.right{
		width: 530rpx;
		height: 100%;
		margin: 0 auto;
		view{
			padding: 10rpx 0;
			image{
				width: 530rpx;
				height: 530rpx;
				border-radius: 10rpx;
			}
			text{
				line-height: 60rpx;
				font-size: 30rpx;
			}
		}
	}
}
</style>
