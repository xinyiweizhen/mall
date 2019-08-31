<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComponents/HomeSwiper'
import recommendView from './childComponents/RecommendView'

import { getHomeData } from 'network/home'
//import { log } from 'util';

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      recommendView,
    },
    data(){
      return {
        banners: [],
        recommends: [],
      }
    },
    created(){
      //1.请求多个数据
      getHomeData().then(res =>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }

  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: white;
  }
</style>
