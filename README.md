# 中后台前端应用框架
  演示地址 <http://www.guobin211.com/nz-admin/>
  
### 测试状况：（**：通过；--：未测试；xx：不支持。）
  ** Chrome：版本 67.0.3396.99（正式版本） （64 位）
  ** Safari： 浏览器版本 11.0.3 (13604.5.6)
  ** Firefox：61.0.1 (64 位)
  ** 微信： 6.6.7
  -- IE：   未测试
  ** 手机百度：10.10.0.12   
  xx 手机QQ浏览器 X5内核：  不支持
  
  <服务端： ng-express-serve>
  <小程序： ng-wx-apps>
  
### Feature
```
 * 基于 Ant Design 精心设计
 * 多种颜色方案，有多个预定义的配色方案
 * Flex Layout 强大的布局，并支持响应式设计
 * 组件丰富，提炼后台应用的典型页面和场景
 * 模块代码，添加和删除非常轻松
 * 渐进式应用(PWA)，更接近原生应用体验
 * 支持镜像部署，急速部署，轻松使用
 * 支持 electron 构建桌面应用
 * 支持webService，构建应用提供良好的用户体验
 * 长期更新
 
```
##  组件
```
  1.富文本编辑器   quill-editor
    指令：quill-editor：el
    数据：editData：Object
  2.动画库
    animations动画支持ie9以上
    css3动画支持ie8以上
    指令：myTiming：number  == timing
    指令：myDelay：number   == delay
  3.图表库
    1.echarts图表
    echarts: ^4.1.0
    指令： echart
    @input ： chartType
  4.视频播放器
    组件: app-video
    指令： vg-player
    数据： srcData: string
    
```
## 结构
```
--src
   --app
     --class                  // 通用类文件
       --utils                // 工具库
       --citys                // 城市数据模型
     --component              // 全局组件
     --layout                 // 应用布局
     --pages                  // 独立页面
     --pipes                  // 管道过滤器
     --plugin                 // 全局插件
     --service                // 全局服务文件夹
     app.component.html       //  appHtml
     app.component.scss       //  app样式
     app.component.spec.ts    //  单元测试文件
     app.component.ts         //  app组件
     app.module.ts            //  全局模块
     app-routing.module.ts    //  全局路由
     app-routing-cache.ts     //  路由缓存
   --assets
     --data              //  全国城市数据
     --fonts             //  字体图标
     @lessCan.less       //  可修改的变量颜色
     quill.snow.css      //  编辑器样式
   --environments
     favicon.cio         //  ico
     index.html          //  entry
     karma.conf.js       //  karmaTEST
     main.ts             //  app enter config
     polyfills.ts        //  polyfills
     styles.scss         //  global styles
     test.ts            
     tsconfig.app.json
     tsconfig.spec.json
     tslint.json
```
###  服务模块
```
 service
  --http                // http     请求服务
  --storage             // storage  存储服务
  --table               // table    表格服务

```

