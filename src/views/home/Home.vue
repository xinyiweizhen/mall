<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" 
          @scroll="ScrollContent" @pullingUp="PullUpLoadMore">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-controller :titles = "titles" @switchTab="HomeSwitchTab"/>
      <goods-list :goods="showGoodsType"/>
    </scroll>
    <!--.native修饰符可以监听组件的事件--->
    <back-top @click.native="BackTop" v-show="IsShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabController from 'components/content/tabcontroller/TabController'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'


import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import FeatureView from "./childComponents/FeatureView"


import { getHomeData, getHomeGoods } from 'network/home'
import { constants } from 'crypto';
//import { log } from 'util';

  export default {
    name: "Home",
    components:{
      NavBar,
      TabController,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop,
    },
    data(){
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新品', '精选'],
        goods: {
          'pop': { page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}, 
        },
        currentType: 'pop',
        IsShowBackTop: false,
      }
    },
    computed: {
      showGoodsType(){ //计算属性显示商品类型
        return this.goods[this.currentType].list;
      }
    },
    created(){
      //1.请求多个数据
      this.initHomeData();
      //2.请求商品数据
      this.initHomeGoodsData('pop');
      this.initHomeGoodsData('new');
      this.initHomeGoodsData('sell');
    },
    methods:{
      /* 组件事件监听相关的方法 */
      HomeSwitchTab(index){
        switch(index){
          case 0 :
            this.currentType = 'pop';
            break;
          case 1 :
            this.currentType = 'new';
            break;
          case 2 :
            this.currentType = 'sell';
            break;
        }
      },
      BackTop(){
        this.$refs.scroll.ScrollTop(0, 0, 500);  //取到scroll组件的ScrollTop()方法完成回到顶部
      },
      ScrollContent(position){
        //console.log(position);
        this.IsShowBackTop=  (-position.y) > 1000 ?  true : false;
      },
      PullUpLoadMore(){
        this.initHomeGoodsData(this.currentType);
      },
      /* 请求数据相关的方法*/
      initHomeData(){
        getHomeData().then(res =>{
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      initHomeGoodsData(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res =>{
          console.log(res)
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          //当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
          this.$refs.scroll.finishPullUp();
        })
      }
    }

  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background: var(--color-tint);
    color: white;
    z-index: 10;
    position:fixed;
    top:0;
    left: 0;
    right: 0;
  }
  /* 方案一：使用绝对定位设置中间内容的高度*/
  .scroll{
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  /* 方案二：使用css3的calc()属性设置中间内容的高度 */
  /*
  .scroll{
    overflow: hidden;
    height:calc(100% - 93px);
    margin-top:44px;
  }
  */

</style>
