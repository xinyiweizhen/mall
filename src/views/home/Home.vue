<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-controller :titles = "titles" @switchTab="HomeSwitchTab" ref="TabController1" v-show="IsFixed" 
          class="tab-controller"/>
    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" 
          @scroll="ScrollContent" @pullingUp="PullUpLoadMore">
      <home-swiper :banners="banners" @SwiperImageLoad="SwiperImageLoaded"/>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-controller :titles = "titles" @switchTab="HomeSwitchTab" ref="TabController2"/>
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

import { debounce } from 'common/utils';

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
        IsFixed:false,
        tabControllerOffsetTop: 0,
        ScrollOffsetY: 0,
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
    mounted(){
      //监听goodsItem的图片是否加载完成
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('ImageLoaded',()=>{
          refresh();
      })
    },
    activated(){
      //console.log(this.ScrollOffsetY)
      this.$refs.scroll.ScrollTo(0, this.ScrollOffsetY, 0);
      this.$refs.scroll.refresh();
    },
    deactivated(){
      //console.log(this.$refs.scroll.getScrollY())
      this.ScrollOffsetY = this.$refs.scroll.getScrollY();

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
        this.$refs.TabController1.currentIndex = index;
        this.$refs.TabController2.currentIndex = index;
      },
      BackTop(){
        this.$refs.scroll.ScrollTo(0, 0, 500);  //取到scroll组件的ScrollTo()方法完成回到顶部
      },
      ScrollContent(position){
        //console.log(position);
        //1.判断滚动高度设置backtop组件的显示与隐藏
        this.IsShowBackTop =  (-position.y) > 1000 ?  true : false;
        //2.判断滚动高度设置tabController组件的吸顶效果
        this.IsFixed = (-position.y) > this.tabControllerOffsetTop ? true : false;
      },
      PullUpLoadMore(){
        this.initHomeGoodsData(this.currentType);
      },
      SwiperImageLoaded(){
        this.tabControllerOffsetTop = this.$refs.TabController2.$el.offsetTop;
      },
      /* 请求数据相关的方法*/
      initHomeData(){
        getHomeData().then(res =>{
          //console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      initHomeGoodsData(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res =>{
          //console.log(res)
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
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background: var(--color-tint);
    color: white;
    z-index: 10;
  }
  .tab-controller{
    position: relative;
    z-index: 10;
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
