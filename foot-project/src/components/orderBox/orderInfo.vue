<template>
	<div class="order-infobox">
		<div class="order-infolist">
			<ul>
				<li v-for="(item,idx) in infoData.infoList" :key="idx">
					<div class="info-name">{{item.name}}</div>
					<div class="info-numbox">
						<div class="info-num">x{{item.number}}</div>
						<div class="info-price">￥{{item.price}}</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="order-info">
			<div class="info-title">订单信息</div>
			<div class="info-box">
				<div class="info-item">订单号：{{infoData.orderNumber}}</div>
				<div class="info-item">桌号：{{infoData.bookNum}}号桌</div>
				<div class="info-item">订单金额：￥{{infoData.price}}</div>
				<div class="info-item">支付方式：{{infoData.payType}}</div>
				<div class="info-item">下单时间：{{infoData.orderTime}}</div>
			</div>
			<div class="go-pay" @click="goPayHandler" v-if="infoData.status=='unfinished'">
				继续支付(29分12秒)
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['infoData'],
		methods:{
			goPayHandler(){
				wx.requestPayment({
				   'timeStamp': '',
				   'nonceStr': '',
				   'package': '',
				   'signType': 'MD5',
				   'paySign': '',
				   'success':function(res){
				   },
				   'fail':function(res){
				   }
				})
			}
		}
	}
</script>

<style scoped>
	.order-infobox{
		background: #E6E6E6;
		height: 100vh;
		overflow: hidden;
	}
	.order-infolist{
		background: #fff;
		max-height: 50vh;
		overflow: auto;
		margin-bottom: 40rpx;
	}
	.order-infolist li{
		border-bottom: 1PX solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 40rpx;
	}
	.order-infolist .info-name{
		flex:1;
		white-space: wrap;
	}
	.order-infolist .info-numbox{
		width: 20%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		font-weight: 700;
		color: #BF3539;
	}
	.order-infolist .info-num{
		font-size: 24rpx;
	}
	/*订单详情*/
	.order-info{
		background: #fff;
		height: 50vh;
		overflow: auto;
		position: relative;
	}
	.order-info .info-title{
		font-size: 32rpx;
		border-bottom: 1PX solid #ccc;
		padding: 20rpx 40rpx;
	}
	.order-info .info-box{
		padding: 20rpx 80rpx;
		color: #999;
	}
	.order-info .info-item{
		padding-bottom: 40rpx;
	}
	.go-pay{
		position: fixed;
		bottom: 0;
		left:0;
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		color: #fff;
		background: #BF3539;
		text-align: center;
	}
</style>