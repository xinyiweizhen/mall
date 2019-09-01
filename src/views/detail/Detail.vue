<template>
  <div>
      <detail-nav-bar></detail-nav-bar>
      <detail-swiper :topImages="topImages" />
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from "./childComponents/DetailSwiper";

import { getDetailData } from 'network/detail'
export default {
    name: "Detail",
    components: {
        DetailNavBar,
        DetailSwiper,
    },
    data(){
        return{
            goodsId: null,
            topImages: [],

        }
    },
    created(){
        //console.log(this.$route);       
        this.goodsId=this.$route.params.goodsId;
        //2.请求数据
        getDetailData(this.goodsId).then((res)=>{
            console.log(res);
            this.topImages = res.result.itemInfo.topImages;
        });
    }
}
</script>

<style scoped>

</style>