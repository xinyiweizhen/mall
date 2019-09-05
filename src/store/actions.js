import { types } from "./mutation-types";

export const actions = {
    /*        addGoodsToCart({commit, state}, payload){
            const oldGoods = state.cartList.find((item)=>{
                return item.id === payload.id
            })
            if(oldGoods){
                const index = state.cartList.indexOf(oldGoods);
                commit('addCount', index)
            }else{
                payload.count = 1;
                payload.check = true;
                commit("addCart",payload)
            }
        }*/
    //如何知道 action 什么时候结束?   store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise
    addGoodsToCart({commit, state}, payload){
        return new Promise((resolve => {
            const oldGoods = state.cartList.find((item)=>{
                return item.id === payload.id
            })
            if(oldGoods){
                const index = state.cartList.indexOf(oldGoods);
                commit(types.ADD_GOODS_COUNT, index)
                resolve()
            }else{
                payload.count = 1;
                payload.check = true;
                commit(types.ADD_GOODS_CART, payload)
                resolve()
            }
        }))
    }
}