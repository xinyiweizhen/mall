import Vue from 'vue'
import Vuex from 'vuex'

import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
//1.安装插件
Vue.use(Vuex)
//2.创建store对象
const store = new Vuex.Store({
    state:{
        cartList: []
    },
    mutations,
    actions,
    getters
})

//3.导出store对象
export default store