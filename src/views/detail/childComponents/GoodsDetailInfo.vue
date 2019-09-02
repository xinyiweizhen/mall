<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'GoodsDetailInfo',
    props:{
        detailInfo:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            loadImagesNum: 0,
            imagesLenght: 0,
        }
    },
    methods:{
        imgLoad(){
            //判断加载完成的数量等于传进来的数量后在一次性提交
            ++this.loadImagesNum === this.imagesLenght && this.$emit('imgLoad') 
        }
    },
    watch:{
        detailInfo() { //监听detailInfo对象
	      // 获取图片的个数
	    	this.imagesLenght = this.detailInfo.detailImage[0].list.length
	    }
    }
}
</script>

<style scoped>

</style>