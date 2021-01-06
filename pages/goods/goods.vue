<template>
	<view class="hot_goods">
		<GoodList :list="goodsList" @toGoods="toGoods"/>
		<view class="over" v-if="isOverFlag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import GoodList from '../../components/goods-list/goods-list.vue'
	import {
		getGoodsList
	} from '../../util/config.js'
	export default {
		components: {
			GoodList
		},
		data() {
			return {
				goodsList: [],
				pageNo: 0,
				isOverFlag: false
			}
		},
		created() {
			this.getGoodsList()
		},
		methods: {
			toGoods(id) {
				uni.navigateTo({
					url: '/pages/goods_detail/goods_detail?id=' + id
				})
			},
			// 获取商品列表数据
			async getGoodsList(callback) {
				const data = await this.$myRequest(getGoodsList)
				if (data.status !== 0) {
					uni.showToast({
						title: '获取数据失败',
						icon: 'none',
						duration: 1000
					})
				} else {
					if(this.pageNo === 0) {
						this.goodsList = data.goodsList
					} else {
						this.goodsList = [...this.goodsList, ...data.goodsList]
					}
					callback && callback()
				}
			}
		},
		onReachBottom() {
			if(this.pageNo >= 3) {
				this.isOverFlag = true
				return
			} else {
				this.pageNo ++
				this.getGoodsList()
			}
		},
		onPullDownRefresh() {
			this.pageNo = 0
			this.goodsList = []
			this.isOverFlag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				})
			}, 1000)
		}
	}
</script>

<style lang="scss" scoped>
	.hot_goods {
		overflow: hidden;
		background: #eee;
		margin-top: 10px;
		.over{
			text-align: center;
			margin: 20rpx 0;
		}
	}
</style>
