<template>
	<div class="order-listbox">
		<ul>
			<li class="order-list" v-for="(item,idx) in listData" :key="idx" @click="navigatorHandler(item)">
				<!-- <navigator url="/pages/orderInfo/main?status=item.status" hover-class="none"> -->
					<div class="flex">
						<div class="list-img"><image :src="item.icon"></image></div>
						<div class="list-text">
							<div class="text-left">
								<div class="list-time">{{item.orderTime}}<i></i></div>
								<div class="list-num">{{item.bookNum}}号桌</div>
							</div>
							<div class="text-right">
								<div class="list-status">{{item.statusTxt}}</div>
								<div class="list-money">￥{{item.money}}</div>
							</div>
						</div>
					</div>
				<!-- </navigator> -->
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['listData'],
		methods:{
			navigatorHandler(item){
				console.log(item)
				let url = "/pages/orderInfo/main?status=" + item.status;
				wx.navigateTo({url})
			}
		}
	}
</script>

<style scoped>
	.order-listbox{
		height: 100vh;
		background: #E6E6E6;
		overflow: auto;
	}
	.order-list{
		background: #fff;
		margin-bottom: 20rpx;
		padding: 20rpx;
	}
	.order-list .flex{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.order-list .list-img{
		flex-shrink: 0;
		width: 180rpx;
		height: 180rpx;
	}
	.order-list .list-text{
		flex:1;
		padding: 0 10rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 48rpx;
	}
	.list-text .text-left{
		font-size: 32rpx;
	}
	.list-text .list-time i{
		display: inline-block;
		border-right: 1PX solid #999;
		border-top: 1PX solid #999;
		width: 10rpx;
		height: 10rpx;
		transform: rotate(45deg);
		margin-bottom: 6rpx;
	}
	.list-text .text-right{
		text-align: center;
	}
	.list-text .list-status{
		font-size: 24rpx;
		color: #999;
	} 
	.list-text .list-money{
		font-weight: 700;
		color: #BF3539;
	}
</style>