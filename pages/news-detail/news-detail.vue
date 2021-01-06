<template>
	<view class="news_detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{'Mar 31 10:10:43 UTC+0800 2012' | formatDate1}}</text>
			<text>浏览：{{detail.count}}次</text>
		</view>
		<!-- #ifndef MP-ALIPAY-->
			<view class="content" v-html="detail.content"></view>
		<!-- #endif -->
		<!-- #ifdef MP-ALIPAY-->
			<rich-text class="content" :nodes="detail.htmlNodes"></rich-text>
		<!-- #endif -->
	</view>
</template>

<script>
	import htmlParser from '../../common/html-parser'
	import { getNewsDetail } from '../../util/config.js'
	export default {
		data() {
			return {
				detail: {}
			}
		},
		filters: {
			formatDate (date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = (nDate.getMonth() + 1).toString().padStart(2, 0)
				const day = (nDate.getDay() + 1).toString().padStart(2, 0)
				return year + '-' + month + '-' + day
			}
		},
		created() {
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail() {
				const data = await this.$myRequest(getNewsDetail)
				if(data.status === 0) {
					var htmlString = data.detail.content.replace(/\\/g, "").replace(/<img/g, "<img style=\"display:none;\"");
					this.$set(data.detail, 'htmlNodes', htmlParser(htmlString))
					this.detail = data.detail
				} else {
					uni.showToast({
						icon: 'none',
						duration: 1000,
						title: '暂无数据'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.news_detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.title{
		text-align: center;
		width: 710rpx;
		display: block;
		font-weight: bold;
		margin: 20rpx 0 30rpx;
	}
	.info{
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
}
</style>
