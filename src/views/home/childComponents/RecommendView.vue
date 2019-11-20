<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: "RecommendView",
    props:{
        recommends:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    width: 20%;
    text-align: center;
    margin-bottom: 10px;
  }

  .recommend img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
</style>