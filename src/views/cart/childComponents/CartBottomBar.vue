<template>
    <div class="bottom-menu">
        <CheckButton class="select-all" @checkBtnClick="checkAllClick" v-model="isSelectAll"></CheckButton>
        <span>全选</span>
        <span class="total-price">合计: ¥{{totalPrice}}</span>
        <span class="buy-product">去结算({{checkNumber}})</span>
    </div>
</template>

<script>
    import CheckButton from "./CheckButton";

    import { mapGetters } from 'vuex'

    export default {
        name: "CartBottomBar",
        components:{
            CheckButton,
        },
        computed:{
            ...mapGetters(['cartListLength', 'cartList']),
            totalPrice(){
                const cartList = this.cartList
                return cartList.filter(item =>{
                    return item.check === true
                }).reduce((preTotal, item) =>{
                    return preTotal + item.price * item.count
                }, 0).toFixed(2)
            },
            checkNumber() {
                const cartList = this.cartList
                return cartList.filter(item =>{
                    return item.check === true
                }).reduce((number, item) =>{
                    return number + item.count
                }, 0)
            },
            isSelectAll(){
                if(this.cartList.length===0)return false;
                //console.log(this.cartList.find(item => item.check === false)); //返回的是一个对象
                return this.cartList.find(item => item.check === false) === undefined
            }
        },
        methods:{
            checkAllClick(){
                // 1.判断是否有未选中的按钮
                //let isSelect = this.cartList.find(item => item.check === false);
                // 2.有未选中的内容, 则全部选中
                //console.log(this.isSelectAll);
                if (!this.isSelectAll) {
                    this.cartList.forEach(item => {
                        item.check = true;
                    });
                } else {
                    this.cartList.forEach(item => {
                        item.check = false;
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .bottom-menu {
        width: 100%;
        height: 44px;
        background-color: #eee;
        position: fixed;
        bottom: 49px;
        left: 0;
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
        font-size: 14px;
        color: #888;
        line-height: 44px;
        padding-left: 35px;
        box-sizing: border-box;
    }

    .bottom-menu .select-all {
        position: absolute;
        line-height: 0;
        left: 12px;
        top: 13px;
    }

    .bottom-menu .total-price {
        margin-left: 15px;
        font-size: 16px;
        color: #666;
    }

    .bottom-menu .buy-product {
        background-image: linear-gradient(90deg,#ff5777,#ff468f);
        color: #fff;
        width: 100px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        float: right;
    }
</style>