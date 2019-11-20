<template>
  <div class="cart">
    <nav-bar class="cart-navbar"><div slot="center">购物车</div></nav-bar>
    <cart-goods-list :cart-list="cartList" v-if="cartListLength !== 0"></cart-goods-list>
    <div class="emptycart" v-else>
      <img  class="emptycart-images" src="https://s10.mogucdn.com/mlcdn/c45406/180704_3ac3b297lghla2jjdhe23d5jfgddf_1500x1170.png" alt="">
      <p class="emptycart-text">你的购物车空空如也</p>
    </div>
    <cart-bottom-bar v-if="cartListLength !== 0"></cart-bottom-bar>
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
.emptycart{
    background: #fff;
    width: 100%;
    text-align: center;
}
.emptycart-images{
  width: 100%;
  text-align: center;
}
</style>
