<template>
  <div>
      <nav-bar>
          <div slot="left" class="back" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="" >
          </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in titles" :key="index"
               :class="{active: index === currentIndex}" class="title-item" @click="titleClick(index)">{{item}}</div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: 'DetailNavBar',
    components: {
        NavBar,
    },
    props:{
        titles: {
           type: Array,
           default(){
               return ['商品', '参数', '评论', '推荐']
           }
        },
        currentIndex: {
            type: Number,
            default: 0
        }
    },
    methods:{
        titleClick(index){
            this.$emit('titleClick', index)
        },
        backClick(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .back img{
      margin-top: 10px;
    }
    .title{
        display: flex;
        font-size: 14px;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: var(--color-high-text)
    }
</style>