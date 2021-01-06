<template>
	<view>
		<!-- banner -->
		<uni-swiper-dot :info="images" :current="current" field="content" mode="round" :dotsStyles="dotsStyles">
		    <swiper class="swiper-box" @change="change">
		        <swiper-item v-for="(item ,index) in images" :key="index">
		            <view class="swiper-item">
		                <image :src="item.image"></image>
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navLists" :key="index" @click="navgitor(item.path)">
				<view class="nav_block">
					<uni-icons :type="item.icon" :size="iconStyle.iconFont" :color="iconStyle.color"></uni-icons>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<GoodList :list="goodsList" @toGoods="toGoods"/>
		</view>
		
	</view>
</template>

<script>
	import GoodList from '../../components/goods-list/goods-list.vue'
	import { getImage, getGoodsList } from '../../util/config.js'
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniSwiperDot,
			uniIcons,
			GoodList
		},
		data() {
			return {
				navLists: [
					{
						icon: 'shop',
						name: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'phone',
						name: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'image',
						name: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'camera',
						name: '学习视频',
						path: '/pages/videos/videos'
					}
				],
				iconStyle: {
					color: '#fff',
					iconFont: 24
				},
				images: [],
				goodsList: [],
				current: 0,
				dotsStyles: {
					backgroundColor: "#FF0000",
					selectedBackgroundColor: "#436EEE"
				}
			}
		},
		onLoad() {
			// #ifdef MP-WEIXIN
				console.log('微信显示')
			// #endif

		},
		created(){
			this.getImages()
			this.getGoodsList()
		},
		methods: {
			toGoods(id) {
				uni.navigateTo({
					url: '/pages/goods_detail/goods_detail?id=' + id
				})
			},
			// 跳转相关页面
			navgitor(url) {
				uni.navigateTo({
					url
				})
			},
			change(e) {
				this.current = e.detail.current
			},
			// 获取轮播图商品
			async getImages() {
				const data = await this.$myRequest(getImage)
				if(data.status !== 0) {
					uni.showToast({
						title: '获取数据失败',
						icon: 'none',
						duration: 1000
					})
				} else {
					this.images = data.iamges
				}
			},
			// 获取商品列表数据
			async getGoodsList() {
				const data = await this.$myRequest(getGoodsList)
				if(data.status !== 0) {
					uni.showToast({
						title: '获取数据失败',
						icon: 'none',
						duration: 1000
					})
				} else {
					this.goodsList = data.goodsList
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	image{
		width: 100vw;
		height: 400rpx;
	}
	.nav{
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 20rpx 0;
		.nav_item{
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.nav_block{
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				background: $shop-color;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 20rpx;
			}
			text{
				color: $shop-color;
				font-size: 30rpx;
			}
		}
	}
	.hot_goods{
		overflow: hidden;
		background: #eee;
		margin-top: 10px;
		.tit{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			color: $shop-color;
			letter-spacing: 20rpx;
			background: #fff;
			margin: 7rpx 0;
		}
	}
	
</style>
