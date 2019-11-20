import { request } from "./request";

export function getHomeData(){
    return request({
        url: "/home/multidata",

    })
}
export function getHomeQuickNav(){
    return request({
        url: "/home/quicknav",

    })
}
export function getHomeBanners(){
    return request({
        url: "/home/banners",

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
