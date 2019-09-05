import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import store from './store/'
import Toast from "./components/common/toast";

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//使用vue图片懒加载
Vue.use(LazyLoad, {
  loading: require('assets/img/common/placeholder.gif')
})
//使用fastclick解决移动端300ms延迟
FastClick.attach(document.body)
//使用自定义的toast插件
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
