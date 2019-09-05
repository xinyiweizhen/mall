<template>
    <scroll class="scroll">
        <cart-goods-list-item v-for="(item,index) in cartList" :key="index" :item-info='item'></cart-goods-list-item>
    </scroll>
</template>

<script>
import CartGoodsListItem from './CartGoodsListItem'

import Scroll from 'components/common/scroll/Scroll'

export default {
    name: 'CartGoodsList',
    components:{
        CartGoodsListItem,
        Scroll,
    },
    props:{
        cartList: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
 .scroll{
     height: calc(100% - 93px);
 }
</style>