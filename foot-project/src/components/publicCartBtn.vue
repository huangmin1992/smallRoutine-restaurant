<template>
	<div class="btn-box">
		<div class="btn-del btn-icon" @click="addOrDel('del')">-</div>
		<div class="btn-text">{{num}}</div>
		<div class="btn-add btn-icon" @click="addOrDel('add')">+</div>
	</div>
</template>

<script>

	import store from '../pages/counter/store'

	export default {
		props:['num','id'],
		data(){
			return{

			}
		},
		methods:{
			addOrDel(type){
				console.log(type)
				store.commit('addOrDelHandler',{type:type,id:this.id})
			}
		}
	}
</script>

<style>
	.btn-box{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn-box .btn-icon{
		box-sizing: border-box;
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		border:1px solid #BF3539;
		line-height: 32rpx;
		text-align: center;
		color: #BF3539;
		font-weight: 700;
	}
	.btn-box .btn-add{
		background: #BF3539;
		color: #fff;
	}
	.btn-box .btn-text{
		padding:0 40rpx;
		font-size: 38rpx;
	}
</style>