<template>
  <div class="container" :class="{'bodyHidden':modalFlag||cartFlag}">
    <SwiperItem :swiperData="imgUrls"></SwiperItem>
    <TabItem></TabItem>
    <ListItem></ListItem>
    <div class="foot-cart">
      <CartItem></CartItem>
    </div>
    <!-- <ModalItem v-if="modalFlag"></ModalItem> -->
    <ModalItem></ModalItem>
    <ModalListItem></ModalListItem>
  </div>
</template>

<script>

  // Use Vuex
import store from '../counter/store'

import SwiperItem from '@/components/publicSwiper'
import TabItem from '@/components/publicSelectTab'
import ListItem from '@/components/publicList'
import CartItem from '@/components/cartBox/cartBox'
import ModalItem from '@/components/modal/publicModal'
import ModalListItem from '@/components/modal/modalList'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      imgUrls: [
        'https://fuss10.elemecdn.com/d/c0/56cfcdabba9fec97a3307b571ca8cjpeg.jpeg',
        'https://fuss10.elemecdn.com/6/f2/5cd85b966281a8d545c34019d0fd1jpeg.jpeg',
        'https://fuss10.elemecdn.com/e/55/b00aef689cb424aaaeae9d50d3e76jpeg.jpeg',
        'https://fuss10.elemecdn.com/a/88/98d10d5580ce28db07673e28726ccjpeg.jpeg'
      ],
    }
  },
  computed:{
    modalFlag(){
      return store.state.modalFlag
    },
    cartFlag(){
      return store.state.cartFlag
    }
  },

  components: {
    SwiperItem,
    TabItem,
    ListItem,
    CartItem,
    ModalItem,
    ModalListItem
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.container.bodyHidden{
  overflow: hidden;
  /*height: 100vh;*/
}
.foot-cart{
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 15;
}
</style>
