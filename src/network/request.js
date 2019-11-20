import axios from "axios";
export function request(config){

    //1.创建axios实例，方便管理baseurl等公用配置
    const instance = axios.create({
        baseURL: ' https://www.easy-mock.com/mock/5dd4215c39123c44ff6cc801/mall',
        timeout: 5000,
    })
    //2.拦截器的作用
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        // console.log(err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}
