// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    foodTypes:['全部菜品', '披萨', '面条', '水果', '寿司', '三明治'],
    foodTypesIndex:0,
    rankTypes: ['综合排序', '热度', '价格', '好评', '时间'],
    rankTypesIndex: 0,
    foodList: [
      {
        id: 1,
        title: "黑胡椒意酱面",
        cost: 45,
        desc: "进口意大利通心粉制作，搭配有机番茄秘制酱汁。",
        icon: "https://fuss10.elemecdn.com/8/05/0b0f3719bf1c9c1673ed69e262888jpeg.jpeg",
        num: 0
      },
      {
        id: 2,
        title: "吉士意大利虾仁面",
        cost: 40,
        desc: "进口意大利通心粉制作，搭配进口地中海大虾仁。",
        icon: "https://fuss10.elemecdn.com/4/df/ff64bc5b06893a12aafb1e94f8b31jpeg.jpeg",
        num: 0
      },
      {
        id: 3,
        title: "牛排意大利面",
        cost: 38,
        desc: "进口意大利通心粉制作，搭配新鲜酱汁牛排和甜糯玉米。",
        icon: "https://fuss10.elemecdn.com/3/42/70aae8406958d22657c5772e2412ejpeg.jpeg",
        num: 0
      },
      {
        id: 4,
        title: "香炸鸡翅",
        cost: 12,
        desc: "有机食品，绿色农场放心肉源",
        icon: "https://fuss10.elemecdn.com/e/0e/df4f9d07b191d34ceddc3fedd88dcjpeg.jpeg",
        num: 0
      },
      {
        id: 5,
        title: "一品寿司",
        cost: 22,
        desc: "百分百手工，百分百口味，来自东海岸的问候。",
        icon: "https://fuss10.elemecdn.com/8/53/353cf146fc9cab79479efcfb6e88ajpeg.jpeg",
        num: 0
      },
      {
        id: 6,
        title: "水果拼盘",
        cost: 16,
        desc: "新鲜时蔬，源自生活的百味奇珍。",
        icon: "https://fuss10.elemecdn.com/0/b9/42b68495a09ec2e501ec3eaa36c6ejpeg.jpeg",
        num: 0
      },
      {
        id: 7,
        title: "巧手三明治",
        cost: 22,
        desc: "好吃不贵，明治选择。",
        icon: "https://fuss10.elemecdn.com/a/fe/0d647946855f76e9dcdfbedfcad61jpeg.jpeg",
        num: 0
      },
      {
        id: 8,
        title: "培根焗饭",
        cost: 26,
        desc: "好吃不解释，真的不解释。",
        icon: "https://fuss10.elemecdn.com/9/de/30676686cf98d88961eb69f1f3083jpeg.jpeg",
        num: 0
      }

    ],
    modalFlag:false,//物品详情
    cartFlag:false,//购物详情
    infoData:{},
    cartNum:0,
    totalPrice:0,
    choseData:[],
    //桌号
    numberIdx:0,
    numberArr:["1号", "2号", "3号", "4号", "5号", "6号", "7号", "8号", "9号"],
    remark:''
  },
  mutations: {
    selectTabHandler:(state,params)=>{
      console.log(params)
      if(params.type == 'allType'){
        state.foodTypesIndex = params.value
      }else if(params.type == 'allRank'){
        state.rankTypesIndex = params.value
      }else if(params.type == 'allNum'){
        state.numberIdx = params.value
      }
    },
    //列表详情
    seeListInfo(state,params){
      state.modalFlag = true;
      state.infoData = params;
      console.log(params)
    },
    //弹窗消失
    hiddenModal(state){
      state.modalFlag = false;
      state.cartFlag = false;
    },
    //加入购物车
    enterCartHandler(state){
      let total = 0;
      state.foodList.forEach((item)=>{
        if(item.id == state.infoData.id){
          item.num+=1;
          state.cartNum+=1;
          if(state.choseData.indexOf(item)<0){
            state.choseData.push(item)
          }
        }
      })
      state.choseData.forEach((item)=>{
        total += (item.num*item.cost)
      })
      state.totalPrice = total
      wx.showToast({
        title: '加入购物车成功！',
        icon: 'success',
        duration: 1000,
        success(){
          setTimeout(()=>{
            state.modalFlag = false;
          },1000)
        }
      })
    },
    //商品加减
    addOrDelHandler(state,params){
        state.foodList.forEach((item,i)=>{
          if(item.id == params.id){
            if(params.type == 'del'){
              item.num--;
              if(item.num <= 0){
                item.num = 0;
              }
              state.cartNum-=1;
              if(state.cartNum<=0){
                state.cartNum = 0;
              }
            }else{
              item.num++;
              state.cartNum+=1;
            }
            if(state.choseData.indexOf(item)<0&&item.num>0){
              state.choseData.push(item)
            }else if(state.choseData.indexOf(item)>=0&&item.num<=0){
              state.choseData.splice(state.choseData.indexOf(item),1)
            }
          }
        })
        let total = 0;
        state.choseData.forEach((item)=>{
          total += (item.num*item.cost)
        })
        state.totalPrice = total
        console.log(state.choseData)
    },
    //购物车列表显示
    cartInfoHandler(state){
      state.cartFlag = true
    },
    //清空购物车
    clearCart(state){
      state.choseData = [];
    },
    //确认提交
    sureOrderHandler(state){
      wx.showToast({
        title: '提交成功',
        icon:'success'
      })
    },
    //计算总价钱
    totalPriceHandler(state){
      let total = 0;
        state.choseData.forEach((item)=>{
          total += (item.num*item.cost)
        })
        state.totalPrice = total
        console.log(state.choseData,state.totalPrice)
    },
    //删除order
    deleteOrderHandler(state,id){
      state.choseData.forEach((item,i)=>{
        if(item.id == id){
          state.choseData.splice(i,1)
        }
      })
      state.foodList.forEach((item,i)=>{
        if(item.id == id){
          item.num = 0;
        }
      })
      this.commit('totalPriceHandler')
    }
  }
})

export default store
