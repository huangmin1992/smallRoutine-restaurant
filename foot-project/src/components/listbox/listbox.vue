<template>
	<div class="list-box">
		<ul>
			<li class="list-con flex" v-for="(item,index) in listData" :key="index">
				<navigator :url="item.url" hover-class="none" class="flex">
					<div class="list-title flex">
						<div class="icon"><image :src="item.icon" > </image></div>
						<div class="list-name">{{item.name}}</div>
					</div>
					<div class="list-more">查看详情>></div>
				</navigator>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['listData']
	}
</script>

<style scoped>
	.flex{
		display: flex;
		align-items: center;
	}
	.list-box{
		font-size: 28rpx;
	}
	.list-con{
		border-bottom: 1PX solid #E6E6E6;
		padding: 30rpx 40rpx;
	}
	.list-con navigator{
		box-sizing: border-box;
		width: 100%;
		justify-content: space-between;
	}
	.list-box .list-title{
		justify-content: flex-start;
	}
	.list-box .icon{
		width: 80rpx;
		height: 80rpx;
		margin-right: 20rpx;
	}
	.list-box .list-more{
		color: #999;
		font-size: 24rpx;
	}
</style>