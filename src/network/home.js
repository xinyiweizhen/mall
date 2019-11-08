import { request } from "./request";

export function getHomeData(){
    return request({
        url: "/home/multidata",

    })
}
export function getHomeBanners(){
    return request({
        url: "/shop/banners",

    })
}
export function getHomeGoods(type, page){
    return request({
        url: "/home/data",
        params:{
            type,
            page,
        }
    })
}
