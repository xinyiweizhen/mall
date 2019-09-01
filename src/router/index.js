import Vue from "vue"
import VueRouter from "vue-router";

//路由懒加载组件
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

//1.安装vue-router插件
Vue.use(VueRouter)

//抽出来的路由映射
const routes = [
    {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/detail/:goodsId',
        component: Detail,
      }
    ]

//2.创建路由
const router = new VueRouter({
    routes,
    mode:'history',
});

//3.导出路由
export default router