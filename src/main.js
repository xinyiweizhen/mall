import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LazyLoad from 'vue-lazyload'
import store from './store/'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//使用vue图片懒加载
Vue.use(LazyLoad, {
  loading: require('assets/img/common/placeholder.gif')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
