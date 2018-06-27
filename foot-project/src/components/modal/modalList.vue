<template>
	<div class="modal-list" :class="{'active':cartFlag}">
		<div class="mask" @click="hiddenModalHandler"></div>
		<div class="modal-list-content">
			<div class="modal-list-header">
				<div class="title">已选商品</div>
				<div class="clear-cart" @click="clearCartHandler"><i></i>清空</div>
			</div>
			<div class="modal-list-box">
				<ul>
					<li v-for="(item,idx) in choseData" :key="idx">
						<div class="list-name">{{item.title}}</div>
						<div class="list-money">￥{{item.num*item.cost}}</div>
						<div class="lsit-btnbox">
							<BtnItem :num="item.num" :id="item.id"></BtnItem>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	import store from '../../pages/counter/store'
	import BtnItem from '../publicCartBtn'

	export default{
		components:{
			BtnItem
		},
		computed:{
			choseData(){
				return store.state.choseData
			},
			cartFlag(){
				return store.state.cartFlag
			}
		},
		methods:{
			hiddenModalHandler(){
				store.commit('hiddenModal')
			},
			//清空购物车
			clearCartHandler(){
				store.commit('clearCart')
			}
		},
		mounted(){
			console.log(this.choseData)
		}
	}
</script>

<style>
	.mask{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.7);
		z-index: -1;
		transition: 0.3s;
		opacity: 0;
	}
	.modal-list{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		transition: 0.3s;
		opacity: 0;
		z-index: -1;
	}
	.modal-list.active,
	.modal-list.active .mask{
		z-index: 11;
		opacity: 1;
	}

	.modal-list-content{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50vh;
		overflow: auto;
		background: #fff;
		z-index: 12;
	}
	.modal-list-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 40rpx;
		border-bottom: 1px solid #ccc;
		font-size: 32rpx;
	}
	.modal-list-header .title{
		font-weight: 700;
	}
	.modal-list-header .clear-cart i{
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		background: url(../../../static/images/delete.png)center no-repeat;
		background-size: 100% auto;
		vertical-align: text-bottom;
	}
	.modal-list-box li{
		border-bottom: 1px solid #ccc;
		padding: 20rpx 40rpx;
		font-size: 36rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.modal-list-box li .list-name{
		max-width: 250rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.modal-list-box li .lsit-btnbox{
		align-self: flex-end;
	}
</style>