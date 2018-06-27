<template>
	<div class="list-box">
		<div class="list-item" v-for="(item,idx) in foodList" :key="idx">
			<div class="list-imgbox" @click="seeInfoHandler(item)">
				<image :src="item.icon" alt="" mode="center"></image>
			</div>
			<div class="list-name"><span>{{item.title}}</span><span>￥{{item.cost}}</span></div>
			<BtnItem :num="item.num" :id="item.id"></BtnItem>
		</div>
	</div>
</template>

<script>

	import store from '../pages/counter/store'
	import BtnItem from './publicCartBtn'

	export default{
		data(){
			return{

			}
		},
		computed:{
			foodList(){
				return store.state.foodList
			}
		},
		components:{
			BtnItem
		},
		methods:{
			seeInfoHandler(item){
				store.commit('seeListInfo',item)
			}
		}
	}
</script>

<style>
	.list-box{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding:20rpx 40rpx;
	}
	.list-box .list-item{
		box-sizing: border-box;
		width: 50%;
		padding-right: 40rpx;
		margin-bottom: 40rpx;
	}
	.list-box .list-item:nth-child(2n){
		padding-right: 0;
	}
	.list-box .list-item .list-imgbox{
		width: 100%;
		height: 230rpx;
		overflow: hidden;
	}
	.list-box .list-item .list-imgbox image{
		width: 100%;
	}
	.list-box .list-item .list-name{
		font-size: 32rpx;
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.list-box .list-item .list-name span:nth-child(1){
		display: block;
		max-width: 200rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.list-box .list-item .list-name span:nth-child(2){
		color: #BF3539;
	}

</style>