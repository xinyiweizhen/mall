<template>
  <div id="detail">
      <detail-nav-bar class="nav-tabbar" @titleClick="selectTitle" :current-index="currentIndex"/>
      <scroll class="scroll" ref='scroll' @scroll="ScrollContent" :probe-type="3">
        <detail-swiper :top-images="topImages" />
        <goods-base-info :goods-info="goodsInfo" />
        <shop-base-info :shopInfo="shopInfo"/>
        <goods-detail-info :detail-info="detailInfo" @imgLoad="imgLoaded"/>
        <goods-params-info :param-info="goodsParamsInfo" ref="detailParams"/>
        <goods-comment-info :comment-infos="goodsCommentInfo" ref="detailComment"/>
         <goods-list :goods="recommendGoods" ref="detailRecommend" />
      </scroll>
        <detail-bottom-bar @addToCart="addToCart"/>
        <back-top @click.native="BackTop" v-show="IsShowBackTop"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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

import { itemImgListenerMixin, backTopMixin} from "common/mixins";

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
    mixins: [itemImgListenerMixin, backTopMixin],
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
            const data = res.data.result;
            // console.log(data);
            //1.获取商品详情轮播图的图片
            this.topImages = data.topImages;
            //2.获取商品的信息
            this.goodsInfo = new GoodsInfo(data.itemInfo, data.itemServices, data.normalPrice);
            //3.获取商家的信息
            this.shopInfo = new ShopInfo(data.shopInfo);
            //4.获取商品的详情信息
            this.detailInfo = data.detailInfo;
            //5.获取商品参数信息
            this.goodsParamsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule);
            //6.获取商品评论信息
            if(data.rateInfo.list)this.goodsCommentInfo = data.rateInfo;
        });
        // 3.请求推荐
        getRecommendData().then((res)=>{
            //console.log(res);
            this.recommendGoods = res.data.list;
        })
    },
    methods: {
        imgLoaded(){
            this.$refs.scroll.refresh();
            //获取四个标题距离顶部的滚动距离
            this.themeOffsetTop = [];
            this.themeOffsetTop.push(0);
            //console.log(this.themeOffsetTop);
            this.themeOffsetTop.push(this.$refs.detailParams.$el.offsetTop - 46)
            this.themeOffsetTop.push(this.$refs.detailComment.$el.offsetTop - 46)
            this.themeOffsetTop.push(this.$refs.detailRecommend.$el.offsetTop - 46)
            this.themeOffsetTop.push(Number.MAX_VALUE)
        },
        selectTitle(index){
            this.$refs.scroll.ScrollTo(0, -this.themeOffsetTop[index], 500)
        },
        ScrollContent(position){
            //console.log(position.y);
            this.listenScrollTheme(-position.y);
            this.IsShowBackTop =  (-position.y) > 1000 ?  true : false;
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
        },
        //使用vuex的辅助函数
        ...mapActions({
            addCart: 'addGoodsToCart'
        }),
        addToCart(){
            //console.log("dianjile ");
            let goods={};
            goods.image = this.topImages[0];
            goods.title = this.goodsInfo.title;
            goods.desc = this.goodsInfo.desc;
            goods.price = 59.5;
            goods.id = this.goodsId;
            // 将 `this.addCart(goods)` 映射为 `this.$store.dispatch('addGoodsToCart',goods)
            this.addCart(goods).then(res =>{
                this.$toast({message: '商品已成功添加到购物车'})
            })
        }

    },
    destroyed() {
        //取消item图片加载完成的事件监听
        this.$bus.$off('ImageLoaded', this.itemImgListener)
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
     height: calc(100% - 93px);
 }
</style>