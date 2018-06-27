<template>
	<div :class="['modal-container',{'active':modalFlag}]">
		<div class="mask" @click="hiddenModalHandler"></div>
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-img">
					<image :src="infoData.icon" mode="center"></image>
				</div>
			</div>
			<div class="modal-body">
				<div class="modal-title">
					<div class="modal-name">{{infoData.title}}</div>
					<div class="modal-money">￥{{infoData.cost}}</div>
				</div>
				<div class="modal-desc">{{infoData.desc}}</div>
			</div>
			<div class="modal-footer" @click="addCartHandler">加入购物车</div>
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
		    modalFlag(){
		      return store.state.modalFlag
		    },
		    infoData(){
		    	return store.state.infoData
		    }
		},
		methods:{
			addCart(){
				store.commit('enterCartHandler')
			},
			hiddenModalHandler(){
				store.commit('hiddenModal')
			},
			addCartHandler(){
				store.commit('enterCartHandler')
			}
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
	.modal-container{
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
	.modal-container.active,
	.modal-container.active .mask{
		opacity: 1;
		z-index:55; 
	}
	.modal-container.active .modal-content{
		bottom: 0;
		opacity: 1;
	}
	.modal-content{
		position: absolute;
		width: 100%;
		height: 80vh;
		z-index: 56;
		background: #fff;
		bottom: -50vh;
		opacity: 0;
		transition: 0.3s;
		transition-delay: 0.2s;
	}
	.modal-container .modal-footer{
		position: absolute;
		bottom: 0;
		left: 0;
		color: #fff;
		width: 100%;
		height: 80rpx;
		background: #BF3539;
		text-align: center;
		line-height: 80rpx;
		font-size: 40rpx;
	}
	.modal-container .modal-header{
		height: 40vh;
		overflow: hidden;
	}
	.modal-img{
		width: 100%;
		height: 100%;
	}
	.modal-container .modal-body{
		height: 40vh;
		font-size: 36rpx;
		padding: 20rpx 56rpx;
	}
	.modal-title{
		border-bottom: 1px solid #ccc;
		line-height: 35rpx;
		padding-bottom: 20rpx;
	}
	.modal-title .modal-money{
		font-weight: 700;
		color: #BF3539;
		padding-top: 10rpx;
	}
	.modal-body .modal-desc{
		font-size: 32rpx;
		color: #666;
		text-indent: 48rpx;
		max-height: 130rpx;
		overflow: auto;
	}
</style>