# mall

>一个使用vue-cli3搭建的移动端商城界面的小Demo。数据使用了
## 安装&构建
```
### 安装依赖
npm install

### 运行开发环境
npm run serve

### 打包项目
npm run build

```

### 项目目录
```
├── README.md                            # 项目说明
├── babel.config.js                      # babel配置文件
├── package-lock.json                    
├── package.json  
├── public                               # 公用目录 （存在首页入口文件、静态资源）
├── src                                  # 核心代码目录
│   ├── App.vue                          # 组件入口文件
│   ├── network                              # 接口服务
│   ├── assets                           # 静态目录（存放图片，插件等）
|   |   ├── css                          # 公用样式、初始化样式
|   |   └── img                          # 存放图片(svg、icon)
│   ├── components                       # 公用组件库
│   ├── main.js                          # 项目js入口文件，包括路由配置等
│   ├── router                           # 路由配置
│   ├── store                            # vuex状态管理                           
│   ├── typings                          # 定义插件
│   ├── utils                            # 工具库
│   └── views                            # 视图目录

```
