<template>
	<view class="news">
		<view class="news_item" v-for="item in newsList" :key="item.id" @click="goDetail(item.id)">
			<image :src="item.imgUrl" mode=""></image>
			<view class="right">
				<view class="tit">{{item.title}}</view>
				<view class="info">
					<text>发表时间：{{item.dateTime}}</text>
					<text>浏览：{{item.count}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getNewsList
	} from '../../util/config.js'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		created() {
			this.getNewsList()
		},
		methods: {
			async getNewsList() {
				const data = await this.$myRequest(getNewsList)
				if (data.status === 0) {
					this.newsList = data.newLists
				} else {
					uni.showToast({
						duration: 1000,
						icon: 'none',
						title: '数据获取失败'
					})
				}
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news {
		.news_item {
			display: flex;
			padding: 10rpx;
			border-bottom: 1px solid $shop-color;

			image {
				max-width: 200rpx;
				height: 150rpx;
			}

			.right {
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.tit {
					font-size: 30rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2) {
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
