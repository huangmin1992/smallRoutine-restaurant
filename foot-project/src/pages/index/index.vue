<template>
  <div class="page-container">
    <div class="header">
      <div class="header-bg"><image src="../../../static/images/index-bg.jpg"></image></div>
        <div class="user-info flex">
            <div class="user-avatar">
              <image :src="userData.avatarUrl"></image>
            </div>
            <div class="user-text">
              <div class="user-name">{{userData.name}}</div>
              <div class="user-time">
                营业时间：{{userData.startTimes}} - {{userData.endTimes}}
              </div>
            </div>
        </div>
        <div class="user-desc">
            {{userData.desc}}
        </div>
    </div>
    <div class="page-body">
      <div class="page-food">
          <navigator url="/pages/homePage/main" hover-class="none">开始点餐</navigator>
      </div>
      <div class="page-listbox">
        
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        userData:{
            avatarUrl:'../../../static/images/avatar.jpg',
            name:'成都串串香',
            startTimes:'09:30',
            endTimes:'21:30',
            desc:'放大方式方法看见的撒开发加分的考生拉法基两个环节及时反馈多久啊是接口规范的上空经过风格发挥和高科技法国航空的方式管理肯定是攻击力就和法国的萨科十六的客服寄过来的开发商概况介绍给估计是劳动法规和捷克大使馆对抗苏联国家浮点数鬼斧神工犯得上广泛和格式的。'
        }
      }
    }
  }
</script>

<style>
  .flex{
    display: flex;
  }
  .page-container{
    background: #fff;
  }
  .page-container .header{
    position: relative;
    z-index: 11;
    height: 580rpx;
    color: #fff;
    box-sizing: border-box;
    padding: 40rpx 80rpx;
    font-size: 28rpx;
    overflow: hidden;
  }
  .page-container .header .header-bg,
  .page-container .header .header-bg::after{
    position: absolute;
    width: 120%;
    height: 120%;
    left: -10%;
    top: -10%;
    bottom: -10%;
    right: -10%;
    box-sizing: border-box;
    filter: blur(20px);
  }
  .page-container .header .header-bg{
    z-index: -1;
  }
  .page-container .header .header-bg::after{
    display: block;
    content:'';
    background: rgba(0,0,0,0.4);
  }
  /*头像*/
  .page-container .user-info{
    align-items: center;
  }
  .page-container .user-avatar{
    width: 140rpx;
    height: 140rpx;
    margin-right: 20rpx;
  }
  .page-container .user-name{
    font-size: 48rpx;
    padding-bottom: 10rpx;
  }
  .page-container .user-time{
    font-size: 32rpx;
  }
  .page-container .user-desc{
    line-height: 48rpx;
    text-indent: 56rpx;
    margin: 40rpx 0;
    word-break:break-all;
    display:-webkit-box;
    -webkit-line-clamp:6;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }

  /*body*/
  .page-body{
    padding: 40rpx 0;
  }
  .page-body .page-food{
    text-align: center;
    padding: 10rpx 20rpx;
  }
  .page-body .page-food navigator{
    display: block;
    border-radius: 10rpx;
    background: #BF3539;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 36rpx;
    color: #fff;
  }
  .page-body .page-food navigator:active{
    background: #A4171B;
  }
</style>