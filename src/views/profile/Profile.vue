<template>
  <div class="me me-warp">
    <div class="me-header">
      <div class="me-header-main">
        <div class="me-header-avatar">
          <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" alt="">
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
  </div>
</template>

<script>
  export default {
    name: "Profile",

  }
</script>

<style lang="scss" scoped>
  .me-warp{
    min-height: 100vh;
    background: #f5f5f5;
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
        me-settings{

        }
      }
    }
  }
  .me-header-links {
    display: flex;
    height: 80px;
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
</style>
