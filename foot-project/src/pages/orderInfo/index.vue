<template>
	<div class="order-infocon">
		<InfoItem :infoData="infoData"></InfoItem>
	</div>
</template>

<script>
	
	import InfoItem from "@/components/orderBox/orderInfo";

	export default{
		data(){
			return{
				infoData:{
					infoList:[
						{name:'回锅肉',number:'1',price:'25'},
						{name:'肉末粉条',number:'1',price:'15'},
						{name:'酸辣土豆丝',number:'1',price:'8'},
						{name:'紫菜蛋花汤',number:'1',price:'8'},
					],
					orderNumber:156985652265456321,
					bookNum:1,
					price:56,
					payType:'在线支付',
					orderTime:'2018-05-16'
				}
			}
		},
		components:{
			InfoItem
		},
		onShow(options){
			console.log(this.$root.$mp.query);
			this.infoData.status = this.$root.$mp.query.status;
		}
	}

</script>

<style>
	
</style>