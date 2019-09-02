<template>
  <div id="detail">
      <detail-nav-bar class="nav-tabbar"/>
      <scroll class="scroll" ref='detailsScroll'>
        <detail-swiper :topImages="topImages" />
        <goods-base-info :goods-info="goodsInfo" />
        <shop-base-info :shopInfo="shopInfo"/>
        <goods-detail-info :detailInfo="detailInfo" @imgLoad="imgLoaded"/>
        <gooods-params-info :paramInfo="goodsParams"/>
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

import Scroll from 'components/common/scroll/Scroll'

import { getDetailData, goodsInfo, shopInfo, GoodsParams } from 'network/detail'
export default {
    name: "Detail",
    components: {
        DetailNavBar,
        DetailSwiper,
        GoodsBaseInfo,
        GoodsDetailInfo,
        GoodsParamsInfo,
        ShopBaseInfo,
        Scroll,
    },
    data(){
        return{
            goodsId: null,
            topImages: [],
            goodsInfo: {},
            shopInfo: {},
            detailInfo: {},
            goodsParams: {},
        }
    },
    created(){
        //console.log(this.$route);       
        this.goodsId=this.$route.params.goodsId;
        //2.请求数据
        getDetailData(this.goodsId).then((res)=>{
            //console.log(res);
            const data = res.result;
            //1.获取商品详情轮播图的图片
            this.topImages = data.itemInfo.topImages;
            //2.获取商品的信息
            this.goodsInfo = new goodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
            //3.获取商家的信息
            this.shopInfo = new shopInfo(data.shopInfo);
            //4.获取商品的详情信息
            this.detailInfo = data.detailInfo;
            //5.获取商品参数信息
            this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule);
        });
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