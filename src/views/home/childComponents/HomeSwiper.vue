<template>
    <swiper :options="swiperOption" ref="bannerSwiper" class="banner-swiper">
      <swiper-slide  v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.src" @load="SwiperImageLoad"/>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name: "HomeSwiper",
    props: {
        banners:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
      return{
        isEmit: false,
        swiperOption: {
          loop : true,
          pagination: {
            el: '.swiper-pagination',
          }
        }
      }
    },
    components: {
        swiper,
        swiperSlide
    },
    methods:{
      SwiperImageLoad(){
        if(!this.isEmit){
          this.$emit('SwiperImageLoad');
          this.isEmit = true
        }
      }
    }
}
</script>

<style lang="scss" scoped>
    .banner-swiper {
        height: 204px;
        background: #f5f5f5;
        .swiper-slide img {
            width: 100%;
            height: 100%;
        }
    }
</style>
