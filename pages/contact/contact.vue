<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phoneCall('400-618-9090')">联系电话：400-618-9090（ 点击拨打 ）</view>
			<view>校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		</view>
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 121.451237,
				latitude: 31.27325,
				scale: 13,
				markers: [{
					longitude: 121.451237,
					latitude: 31.27325,
					iconPath: '../../static/address.png',
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			phoneCall(phoneNumber) {
				console.log(phoneNumber)
				uni.makePhoneCall({
					phoneNumber
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}
	}

	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;

		view {
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}

	.map {
		width: 750rpx;
		height: 750rpx;
	}
</style>
