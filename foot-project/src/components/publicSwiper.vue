<template>
  <div class="swiper-box">
    <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration" class="siwper-container">
      <block v-for="(item,idx) in swiperData" :key="idx">
        <swiper-item>
          <image :src="item" class="slide-image" mode="center" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['swiperData'],
  data(){
  	return{
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 1000
  	}
  }
}
</script>

<style>
  image{
    width: 100%;
  }
  .swiper-box {
    width: 100%;
    height: 400rpx;
  }
  .swiper-box .siwper-container{
    height: 100%;
    width: 100%;
  }
</style>
