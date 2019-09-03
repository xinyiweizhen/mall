import { request } from "./request";

export function getDetailData(iid){
    return request({
        url: '/detail',
        params:{
            iid,
        }
    });
}
export function getRecommendData() {
    return request({
        url: '/recommend'
    })
}


//封装商品信息的对象，把从服务器请求的分散的商品信息整合到一个对象中，面向对象开发
export class GoodsInfo {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice
    }
}
//封装商家信息对象
export class ShopInfo {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
  }

  //封装商品参数的对象
  export class GoodsParams {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }