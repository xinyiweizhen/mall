<template>
  <swiper :options="swiperOption" ref="bannerSwiper" class="banner-swiper">
      <swiper-slide  v-for="(item,index) in topImages" :key="index">
          <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name: 'DetailSwiper',
    components: {
        swiper,
        swiperSlide
    },
    props:{
        topImages:{
            type: Array,
            default(){
                return [] 
            }
        }
    },
    data(){
        return {
          swiperOption: {
            loop : true,
            pagination: {
                el: '.swiper-pagination',
            }
          }
        }
    }
}
</script>

<style lang="scss" scoped>
    .banner-swiper {
        height: 390px;
        background: #f5f5f5;
        .swiper-slide img {
            display: block;
            width: 100%;
            max-height: 100%;
            margin: 0 auto;
        }
    }
</style>