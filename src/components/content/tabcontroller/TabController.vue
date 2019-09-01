<template>
  <div class="tab-controller">
      <div v-for="(item,index) in titles" :key="index" class="tab-controller-item"
       :class="{active: index === currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "TabController",
    props: {
        titles: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex: 0,
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            this.$emit("switchTab",index);  //将事件传递到父组件
        },
    }
}
</script>

<style scoped>
    .tab-controller {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-controller-item {
    flex: 1;
  }

  .tab-controller-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .tab-controller-item.active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>