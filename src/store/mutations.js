import { types } from "./mutation-types";

export const mutations = {
    [types.ADD_GOODS_CART](state, payload){
        state.cartList.push(payload)
    },
    [types.ADD_GOODS_COUNT](state, payload){
        state.cartList[payload].count += 1;
    }
}