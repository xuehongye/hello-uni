<template>
	<view class="goods_list">
		<view class="goods_item" v-for="(item, index) in list" :key="index" @click="toGoods(item.id)">
			<image :src="item.image"></image>
			<view class="price">
				<text>￥{{item.newPrice}}</text>
				<text>￥{{item.oldPrice}}</text>
			</view>
			<view class="name">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		data() {
			return {
			}
		},
		methods: {
			toGoods(id) {
				this.$emit('toGoods', id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;

		.goods_item {
			background: #fff;
			width: 355rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 10rpx 0;
			padding: 10rpx;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150px;
			}

			.price {
				width: 100%;
				color: $shop-color;
				font-size: 36rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 20rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
