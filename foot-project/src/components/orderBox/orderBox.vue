<template>
	<div class="order-container">
		<div class="order-heard">
			<div class="order-numbox flex">
				<label for="">桌号</label>
				<picker @change="selectNumber" data-type="allNum" :value="index" :range="numberArr">
				    <view class="picker flex">
				      {{numberArr[numberIdx]}}
				      <i>﹀</i>
				    </view>
				</picker>
			</div>
			<div class="order-remark flex">
				<label for="">备注</label>
				<div class="remark-text">
					<textarea placeholder="请输入备注" v-model="remark"></textarea>
				</div>
			</div>
			<div class="order-total flex">
				<label for="">总价</label>
				<div class="total-price">￥{{totalPrice}}</div>
			</div>
		</div>
		<div class="order-body">
			<ul>
				<li v-for="(item,idx) in choseData" :key="idx">
					<div class="order-img">
						<img :src="item.icon" alt="">
					</div>
					<div class="order-textbox">
						<div class="order-title">{{item.title}}</div>
						<div class="order-pricebox">
							<span>￥{{item.cost}}*{{item.num}}</span>
						</div>
					</div>
					<div class="order-delete" @click="deleteOrder" :data-id="item.id">
						<span></span>
					</div>
				</li>
			</ul>
		</div>
		<div class="order-btn">
			<div class="order-back" @click="backHandler">返回修改</div>
			<div class="order-sure" @click="sureHandler">确认提交</div>
		</div>
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
			numberArr(){
				return store.state.numberArr
			},
			numberIdx(){
				return store.state.numberIdx
			},
			remark(){
				return store.state.remark
			},
			choseData(){
				return store.state.choseData
			},
			totalPrice(){
				return store.state.totalPrice
			}
		},
		methods:{
			selectNumber(e){
				let type = e.currentTarget.dataset.type;
				let value = e.target.value
				store.commit('selectTabHandler',{type:type,value:value})
			},
			backHandler(){
				wx.navigateBack(1)
			},
			sureHandler(){
				store.commit('sureOrderHandler')
			},
			deleteOrder(e){
				let id = e.currentTarget.dataset.id
				store.commit('deleteOrderHandler',id)
			}
		}
	}
</script>

<style>
	.order-container .order-heard{
		height: 450rpx;
		background: url(../../../static/images/head-bg.jpg)center no-repeat;
		background-size: 100% 100%;
		box-sizing: border-box;
		padding: 30rpx 60rpx;
		font-size: 32rpx;
		box-shadow: 0 0 2rpx #000;
	}
	.total-price{
		font-weight: 700;
		color: #BF3539;
	}
	.order-container .order-heard label{
		padding-right: 40rpx;
		flex-shrink: 0;
	}
	.order-heard .flex{
		display: flex;
		align-items: center;
	}
	.order-numbox .picker{
		position: relative;
		border:1px solid #707070;
		border-radius: 12rpx;
		width: 300rpx;
		height: 80rpx;
		background: #fff;
		justify-content: center;
		padding-right: 80rpx;
	}
	.order-numbox .picker i{
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 0;
		top: 0;
		height: 100%;
		width: 80rpx;
		background: #BF3539;
		color: #fff;
		font-weight: 700;
	}
	.order-remark{
		margin-top: 40rpx;
		margin-bottom: 40rpx;
	}
	.order-remark label{
		align-self: flex-start;
	}
	.order-remark .remark-text{
		flex: 1;
	}
	.order-remark textarea{
		border:1px solid #707070;
		border-radius: 12rpx;
		background: #fff;
		width: 100%;
		height: 200rpx;
		overflow: auto;
		box-sizing: border-box;
		padding: 10rpx;
		font-size: 28rpx;
		color: #000;
	}
	.order-body{
		padding: 20rpx 0;
		font-size: 36rpx;
	}
	.order-body ul{
		height: 50vh;
		padding-bottom: 100rpx;
		box-sizing: border-box;
		overflow: auto;
	}
	.order-body ul li{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		border-bottom: 1px solid #707070;
		box-shadow: 0 0 2rpx #ccc;
		padding: 20rpx 40rpx 20rpx;
	}
	.order-body .order-img{
		width: 180rpx;
		height: 180rpx;
		overflow: hidden;
		align-self: center;
		margin-right: 40rpx;
	}
	.order-body .order-img img{
		width: 100%;
		height: 100%;
	}
	.order-body .order-textbox{
		flex:1;
	}
	.order-body .order-textbox .order-title{
		font-size:40rpx;
		padding-bottom:10rpx;
	}
	.order-body .order-textbox span{
		color: #BF3539;
		font-weight: 700;
		margin-right: 20rpx;
	}
	.order-delete{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.order-delete span{
		display: block;
		width: 86rpx;
		height: 86rpx;
		background: url(../../../static/images/delete-b.png)center no-repeat;
		background-size: 100% 100%;
	}
	.order-btn{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		font-size: 40rpx;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.order-btn>div{
		flex-basis: 50%;
		flex-shrink: 0;
		height: 100%;
		line-height: 100rpx;
	}
	.order-btn .order-back{
		background: #E6E6E6;
		border-right: 1px solid #707070;
	}
	.order-btn .order-sure{
		background: #BF3539;
		color: #fff;
	}
</style>