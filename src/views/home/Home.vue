<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-controller :titles = "titles" @switchTab="HomeSwitchTab"/>
    <goods-list :goods="showGoodsType"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabController from 'components/content/tabcontroller/TabController'
import GoodsList from 'components/content/goods/GoodsList'

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
        })
      }
    }

  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    padding-bottom: 70px;
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
</style>
