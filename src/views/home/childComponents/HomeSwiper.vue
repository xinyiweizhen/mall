<template>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="SwiperImageLoad"/>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

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
        isEmit: false
      }
    },
    components: {
        Swiper,
        SwiperItem,
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

<style lang="sass" scoped>

</style>