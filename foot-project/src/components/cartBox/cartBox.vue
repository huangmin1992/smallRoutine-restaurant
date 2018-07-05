<template>
	<div class="cart-box">
		<div class="cart-left" @click="ShowCartInfo">
			<img src="../../../static/images/cart-icon.png" alt="">
			<span>{{choseData.length}}</span>
		</div>
		<div class="cart-totalMoney">￥{{totalPrice}}</div>
		<div class="cart-btn" @click="linkChange">提交清单</div>
	</div>
</template>

<script>

	import store from '../../pages/counter/store'

	export default{
		data(){
			return{

			}
		},
		computed:{
			cartNum(){
				return store.state.cartNum
			},
			totalPrice(){
				return store.state.totalPrice
			},
			choseData(){
				return store.state.choseData
			}
		},
		methods:{
			ShowCartInfo(){
				store.commit('cartInfoHandler')
			},
			//页面跳转
			linkChange(){
				wx.navigateTo({
					url:'/pages/orderBox/main'
				})
			}
		}
	}
</script>

<style>
	.cart-box{
		height: 100rpx;
		background: #E6E6E6;
		color: #BF3539;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.cart-box .cart-left{
		position: relative;
		padding: 0 50rpx;
		display: flex;
		align-items: center;
	}
	.cart-box .cart-left img{
		width: 56rpx;
		height: 56rpx;
	}
	.cart-box .cart-left span{
		display: block;
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		background: #BF3539;
		color: #fff;
		border-radius: 50%;
		text-align: center;
		line-height: 40rpx;
		top:-6rpx;
		right:24rpx;
		font-size: 28rpx;
	}
	.cart-box .cart-totalMoney{
		padding: 0 10rpx;
		font-size: 40rpx;
		font-weight: 700;
		width: 310rpx;
		text-align: center;
	}
	.cart-box .cart-btn{
		height: 100%;
		flex:1;
		font-size: 36rpx;
		color: #fff;
		background: #BF3539;
		text-align: center;
		line-height: 100rpx;
	}
</style>