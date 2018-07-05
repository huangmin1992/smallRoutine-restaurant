<template>
	<div class="orderList-container">
		<ListItem  :listData="orderListData"></ListItem>
	</div>
</template>

<script>
	import ListItem from '@/components/orderBox/orderList';

	export default{
		data(){
			return{
				orderListData:[
					{icon:'/static/images/avatar.jpg',orderTime:"2018-06-18 13:40",bookNum:"1",status:"compelete",statusTxt:"已付款",money:"156"},
					{icon:'/static/images/avatar.jpg',orderTime:"2018-06-18 13:40",bookNum:"2",status:"compelete",statusTxt:"已付款",money:"36"},
					{icon:'/static/images/avatar.jpg',orderTime:"2018-06-18 13:40",bookNum:"3",status:"unfinished",statusTxt:"未付款",money:"26"},
					{icon:'/static/images/avatar.jpg',orderTime:"2018-06-18 13:40",bookNum:"4",status:"compelete",statusTxt:"已付款",money:"106"}
				]
			}
		},
		components:{
			ListItem
		}
	}
</script>

<style></style>