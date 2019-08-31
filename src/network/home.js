import { request } from "./request";

export function getHomeData(){
    return request({
        url: "/home/multidata",

    })
}
export function getHome(){
    return request({
        url: "",
        
    })
}
