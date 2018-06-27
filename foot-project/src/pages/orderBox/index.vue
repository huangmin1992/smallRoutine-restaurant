<template>
	<div class="order-container">
		<OrderItem></OrderItem>
	</div>
</template>

<script>

	import store from '../counter/store'
	import OrderItem from '@/components/orderBox/orderBox'

	export default{
		data(){
			return{

			}
		},
		components:{
			OrderItem
		}
	}
</script>

<style>
	
</style>