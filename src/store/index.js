import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)
//2.创建store对象
const store = new Vuex.Store({
    state:{
        cartList: []
    },
    mutations:{
        addCart(state, payload){
            state.cartList.push(payload)
        },
        addCount(state, payload){
            state.cartList[payload].count += 1;
        }
    },
    actions:{
        addGoodsToCart({commit, state}, payload){
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
        }
    }
})

//3.导出store对象
export default store