<template>
    <div class="cart-list">
        <scroll class="scroll">
            <cart-goods-list-item v-for="(item,index) in cartList" :key="index" :item-info='item'></cart-goods-list-item>
        </scroll>
    </div>
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
    .cart-list{
        height: calc(100% - 93px - 44px);
    }
     .scroll{
         height: 100%;
         overflow: hidden;
     }
</style>