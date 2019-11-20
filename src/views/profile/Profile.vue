<template>
  <div class="me me-warp">
    <div class="me-header">
      <div class="me-header-main">
        <div class="me-header-avatar">
          <img src="http://s11.mogucdn.com/mlcdn/5abf39/191120_4f8i4celdkha414i1i1hfa2g484e5_100x100.jpg_160x160.jpg" alt="">
        </div>
        <div class="me-infomation">
          <div class="me-info">
            信用值: 93.6
          </div>
          <div class="me-name">
            DAHAI
          </div>
          <!--<div class="me-settings">-->

          <!--</div>-->
        </div>
      </div>
    </div>
    <!-- 我的收藏 -->
    <div class="me-header-links">
      <a class="me-links-item">
        <p class="have-nums">162</p>
        <p class="link-name">收藏夹</p>
      </a>
      <a class="me-links-item">
        <p class="have-nums">22</p>
        <p class="link-name">关注店铺</p>
      </a>
      <a class="me-links-item">
        <p class="have-nums">88</p>
        <p class="link-name">足迹</p>
      </a>
    </div>
    <!-- 我的订单 -->
    <div class="me-order-wrap">
      <div class="me-order-hd">
        <div class="box-title">
          我的订单
        </div>
        <a href="/#">全部
        <img class="tools-arrow" src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png" alt="">
        </a>
      </div>
      <div class="me-order-bd">
        <a href="/#" class="item">
          <div class="img-wrap">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/190815_0ig16599k9l4f80g59cbkc6bcadid_75x75.png" alt="">
          </div>
          <div class="title">待付款</div>
        </a>
        <a href="/#" class="item">
          <div class="img-wrap">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/190815_5j02c44liecec503kdldjbh72hca8_75x75.png" alt="">
          </div>
          <div class="title">待发货</div>
        </a>
        <a href="/#" class="item">
          <div class="img-wrap">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/190815_56bd5eg3f4h47g2l1042436dc2950_75x75.png" alt="">
          </div>
          <div class="title">待收货</div>
        </a>
        <a href="/#" class="item">
          <div class="img-wrap">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/190815_8af1b27cfaed15fllab4j3hffh7h8_75x75.png" alt="">
          </div>
          <div class="title">评价</div>
        </a>
        <a href="/#" class="item">
          <div class="img-wrap">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/190815_18db4je44bd6ej8ajg0l1950ia5ih_75x75.png" alt="">
          </div>
          <div class="title">退款售后</div>
        </a>
      </div>
    </div>
    <!-- 列表 -->
    <div class="setting-list-item">
      <a class="item-content">
        <div class="item-inner">
          <p class="item-title">收货地址</p>
          <img class="tools-arrow" src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png" alt="">
        </div>
      </a>
    </div>
    <div class="setting-list-item">
      <a class="item-content">
        <div class="item-inner">
          <p class="item-title">修改登陆密码</p>
          <img class="tools-arrow" src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png" alt="">
        </div>
      </a>
    </div>
    <div class="setting-list-item">
      <a class="item-content">
        <div class="item-inner">
          <p class="item-title">绑定手机</p>
          <img class="tools-arrow" src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png" alt="">
        </div>
      </a>
    </div>
    <!-- 退出按钮 -->
    <a class="logout-btn">退出登录</a>
  </div>
</template>

<script>
  export default {
    name: "Profile",

  }
</script>

<style lang="scss" scoped>
  .me{
    height: 100vh;
    background: #FFFFFF;
    padding-bottom: 49px;
  }
  .me-header{
    position: relative;
    padding-top: 45px;
    height: 225px;
    background: url("../../assets/img/profile/mheader_bg.png");
    background-size: cover;
    background-position: center;
    .me-header-main{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 160px;
      padding: 15px 30px;
      color: #ffffff;
      .me-header-avatar{
        position: relative;
        overflow: hidden;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #ffffff;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
      }
      .me-infomation{
        flex: 1;
        text-align: center;
        .me-name{
          font-size: 14px;
          font-weight: bold;
          margin-top: 15px;
          color: #f5f5f5;
        }
        .me-info{
          margin-top: 10px;
          font-size: 12px;
          color: #f5f5f5;
        }
      }
    }
  }
  .me-header-links {
    display: flex;
    height: 80px;
    background: #f5f5f5;
    color: #555555;
    .me-links-item{
      flex: 1;
      min-width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .have-nums {
        font-size: 14px;
        font-weight: bold;
      }
      .link-name {
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
  .tools-arrow{
    width: 5px;
    height: 9px;
    margin-left: 3px;
  }
  .me-order-wrap{
    width: 100vw;
    background: #f5f5f5;
    margin: 5px 0 9px;
    .me-order-hd{
      margin: 0 auto;
      width: 95%;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      border-bottom: 1px solid #ffffff;
      .box-title{
        float: left;
        font-size: 16px;
        color: #333;
      }
      a{
        float: right;
        display: flex;
        align-items: center;
        color: #999;
        font-size: 12px;
      }
    }
    .me-order-bd{
      padding: 5px;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      a.item{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        width: 50px;
        margin: 5px 9px;
        .img-wrap{
          position: relative;
          width: 25px;
          height: 25px;
          margin: 3px;
          img{
            width: 100%;
          }
        }
        .title{
          font-size: 12px;

        }
      }
    }
  }
  .setting-list-item{
    width: 100%;
    overflow-x: hidden;
    list-style-type: none;
    font-weight: 400;
    background-color: #f5f5f5;
    .item-content{
      width: 100%;
      line-height: 49px;
      box-sizing: border-box;
      .item-inner{
        min-height: 49px;
        width: 95%;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
        background-image: linear-gradient(180deg,transparent 98%,#fff 0)
      }
    }
  }
  .logout-btn{
    display: block;
    width: 95%;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: #ff5777;
    font-size: 15px;
    margin: 0 auto;
    border-radius: 2px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 9px;
    cursor: pointer;
  }
</style>
