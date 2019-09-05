<template>
<div>
  <nav-bar class="cart-navbar"><div slot="center">购物车()</div></nav-bar>
  <cart-goods-list :cart-list="cartList"></cart-goods-list>
</div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartGoodsList from './childComponents/CartGoodsList'

import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
      CartGoodsList,
    },
    data(){
      return{
        cartList: this.$store.state.cartList
      }
    },
    computed:{
      //...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
.cart-navbar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

</style>
