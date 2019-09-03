<template>
    <div class="goods-item" @click="itemClick">
        <img :src="showImage" alt="" @load="imageLoad">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="like">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props: {
        goodsItem:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {

        }
    },
    computed:{
      showImage(){
          return this.goodsItem.show.img || this.goodsItem.image || this.goodsItem.img
      }
    },
    methods: {
        imageLoad(){  //监听图片是否加载完成事件，解决better-scroll的滚动高度bug
            //因为这个组件和home组件隔了好几层组件，一层层传递事件有点麻烦
            //所以这里通过事件总线的方式来传递事件
            this.$bus.$emit('ImageLoaded');
        },
        itemClick(){
            this.$router.push('detail/'+ this.goodsItem.iid)
            /**
            this.$router.push({
                path: 'detail',
                query: this.goodsItem.iid,
            }) */
        }
    }
}
</script>

<style scoped>
    .goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    float: left;
  }

  .goods-info .like {
    position: relative;
    float: right;
  }

  .goods-info .like::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>