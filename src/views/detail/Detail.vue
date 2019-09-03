<template>
  <div id="detail">
      <detail-nav-bar class="nav-tabbar" @titleClick="selectTitle" :current-index="currentIndex"/>
      <scroll class="scroll" ref='detailScroll' @scroll="ScrollContent" :probeType="3">
        <detail-swiper :topImages="topImages" />
        <goods-base-info :goods-info="goodsInfo" />
        <shop-base-info :shopInfo="shopInfo"/>
        <goods-detail-info :detailInfo="detailInfo" @imgLoad="imgLoaded"/>
        <goods-params-info :paramInfo="goodsParamsInfo" ref="detailParams"/>
        <goods-comment-info :commentInfo="goodsCommentInfo" ref="detailComment"/>
         <goods-list :goods="recommendGoods" ref="detailRecommend" />
      </scroll>
      <detail-bottom-bar />

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
import DetailBottomBar from "./childComponents/DetailBottomBar";

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
        DetailBottomBar,
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
            themeOffsetTop: [],
            currentIndex: 0,
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
            //console.log(res);
            this.recommendGoods = res.data.list;
        })
    },
    methods: {
        imgLoaded(){
            this.$refs.detailScroll.refresh();
            //获取四个标题距离顶部的滚动距离
            this.themeOffsetTop = [];
            this.themeOffsetTop.push(0);
            //console.log(this.$refs.detailParams.$el.offsetTop);
            this.themeOffsetTop.push(this.$refs.detailParams.$el.offsetTop - 48)
            this.themeOffsetTop.push(this.$refs.detailComment.$el.offsetTop - 48)
            this.themeOffsetTop.push(this.$refs.detailRecommend.$el.offsetTop - 48)
            this.themeOffsetTop.push(Number.MAX_VALUE)
        },
        selectTitle(index){
            this.$refs.detailScroll.ScrollTo(0, -this.themeOffsetTop[index], 500)
        },
        ScrollContent(position){
            //console.log(position.y);
            this.listenScrollTheme(-position.y)
        },
        listenScrollTheme(position){
            let lenght = this.themeOffsetTop.length;
            for (let i = 0; i < lenght; i++){
                let offset = this.themeOffsetTop[i];
                if(position >= offset && position < this.themeOffsetTop[i+1]){
                    if(this.currentIndex !== i ){
                        this.currentIndex = i;
                    }
                    break;
                }
            }
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