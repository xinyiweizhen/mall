<template>
  <div id="detail">
      <detail-nav-bar class="nav-tabbar"/>
      <scroll class="scroll" ref='detailsScroll'>
        <detail-swiper :topImages="topImages" />
        <goods-base-info :goods-info="goodsInfo" />
        <shop-base-info :shopInfo="shopInfo"/>
        <goods-detail-info :detailInfo="detailInfo" @imgLoad="imgLoaded"/>
        <goods-params-info :paramInfo="goodsParamsInfo"/>
        <goods-comment-info :commentInfo="goodsCommentInfo"/>
         <goods-list :goods="recommendGoods"/>
      </scroll>

  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar';
import DetailSwiper from "./childComponents/DetailSwiper";
import GoodsBaseInfo from './childComponents/GoodsBaseInfo';
import ShopBaseInfo from './childComponents/ShopBaseInfo';
import GoodsDetailInfo from './childComponents/GoodsDetailInfo';
import GoodsParamsInfo from './childComponents/GoodsParamsInfo';
import GoodsCommentInfo from "./childComponents/GoodsCommentInfo";

import GoodsList from "components/content/goods/GoodsList";
import Scroll from 'components/common/scroll/Scroll'

import { getDetailData, getRecommendData, GoodsInfo, ShopInfo, GoodsParams } from 'network/detail'
export default {
    name: "Detail",
    components: {
        GoodsCommentInfo,
        DetailNavBar,
        DetailSwiper,
        GoodsBaseInfo,
        GoodsDetailInfo,
        GoodsParamsInfo,
        ShopBaseInfo,
        Scroll,
        GoodsList,
    },
    data(){
        return{
            goodsId: null,
            topImages: [],
            goodsInfo: {},
            shopInfo: {},
            detailInfo: {},
            goodsParamsInfo: {},
            goodsCommentInfo: {},
            recommendGoods: [],
        }
    },
    created(){
        //console.log(this.$route);
        this.goodsId=this.$route.params.goodsId;
        //2.请求数据
        getDetailData(this.goodsId).then((res)=>{
            console.log(res);
            const data = res.result;
            //1.获取商品详情轮播图的图片
            this.topImages = data.itemInfo.topImages;
            //2.获取商品的信息
            this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
            //3.获取商家的信息
            this.shopInfo = new ShopInfo(data.shopInfo);
            //4.获取商品的详情信息
            this.detailInfo = data.detailInfo;
            //5.获取商品参数信息
            this.goodsParamsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule);
            //6.获取商品评论信息
            if(data.rate.list)this.goodsCommentInfo = data.rate.list[0];
        });
        //3.请求推荐
        getRecommendData().then((res)=>{
            console.log(res);
            this.recommendGoods = res.data.list;
        })
    },
    methods: {
        imgLoaded(){
            this.$refs.detailsScroll.refresh();
        }
    }
}
</script>

<style scoped>
 #detail{
     position: relative;
     z-index: 10;
     background: #fff;
     height: 100vh;
 }
 .nav-tabbar{
     position: relative;
     z-index: 11;
     background: #fff;
 }
 .scroll{
     height: calc(100% - 44px);
 }
</style>