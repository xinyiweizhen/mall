<template>
  <div class="cart">
    <nav-bar class="cart-navbar"><div slot="center">购物车({{cartListLength}})</div></nav-bar>
    <cart-goods-list :cart-list="cartList"></cart-goods-list>
    <cart-bottom-bar ></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartGoodsList from './childComponents/CartGoodsList'
import CartBottomBar from "./childComponents/CartBottomBar";

import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components:{
      CartBottomBar,
      NavBar,
      CartGoodsList,
    },
/*  data(){
      return{
        cartList: this.$store.state.cartList
      }
    },*/
    computed:{
      ...mapGetters(['cartListLength', 'cartList'])
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
.cart-navbar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

</style>
