<template>
	<div class="select-tab">
		<div class="select-item">
			<picker @change="selectTabChange" data-type="allType" :value="index" :range="foodTypes">
			    <view class="picker">
			      	{{foodTypes[foodTypesIndex]}}
			    </view>
			</picker>
		</div>
		<div class="select-item">
			<picker @change="selectTabChange" data-type="allRank" :value="index" :range="rankTypes">
			    <view class="picker">
			      	{{rankTypes[rankTypesIndex]}}
			    </view>
			</picker>
		</div>
	</div>
</template>

<script>
	// Use Vuex
	import store from '../pages/counter/store'
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			foodTypes(){
				return store.state.foodTypes
			},
			foodTypesIndex(){
				return store.state.foodTypesIndex
			},
			rankTypes(){
				return store.state.rankTypes
			},
			rankTypesIndex(){
				return store.state.rankTypesIndex
			}
		},
		methods:{
			selectTabChange(e){
				console.log(e)
				let type = e.currentTarget.dataset.type
				let idx = e.target.value
				console.log(type,idx)
				store.commit('selectTabHandler',{type:type,value:idx})
			}
		}
	}
</script>

<style>
	.select-tab{
		display: flex;
		justify-content: space-between;
		width: 100%;
		text-align: center;
		border-bottom: 1px solid #ccc;
	}
	.select-item{
		position: relative;
		font-size: 28rpx;
		width: 50%;
		box-sizing: border-box;
		padding: 20rpx 20rpx;
	}
	.select-item:after{
		position: absolute;
		display: block;
		content: '';
		width: 20rpx;
		height: 20rpx;
		border-top:2rpx solid #000;
		border-right:2rpx solid #000;
		top:50%;
		margin-top: -15rpx;
		right: 20%;
		transform: rotate(135deg);
	}

</style>