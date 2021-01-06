<template>
	<view class="goods-detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item, index) in images" :key="index">
				<image :src="item.image" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥6788</text>
				<text>￥8788</text>
			</view>
			<view class="goods_name">
				华为 HUAWEI nova 5z 麒麟810芯片
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：SD35134626346</view>
			<view>库存：100</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				内容
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	import {
		getImage
	} from '../../util/config.js'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				images: [],
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		created() {
			this.getImages()
		},
		methods: {
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			},
			// 获取轮播图商品
			async getImages() {
				const data = await this.$myRequest(getImage)
				if (data.status !== 0) {
					uni.showToast({
						title: '获取数据失败',
						icon: 'none',
						duration: 1000
					})
				} else {
					this.images = data.iamges
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.goods-detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 30rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 20rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.line {
			width: 100vw;
			height: 10rpx;
			background: #eee;
		}

		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box3 {
			padding-bottom: 100px;
			.tit {
				font-size: 32rpx;
				padding-left: 10rpx;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
			}
		}
		.goods_nav{
			width: 100%;
			position: fixed;
			bottom: 0;
		}
	}
</style>
