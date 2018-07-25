# NZ-Admin

  演示地址 <http://>
```
  使用 angular 构建跨平台应用 PWA
  
  特点：模块化，组件化，跨平台，降级式兼容性，一套代码可供多端使用。
       与微信小程序文件对应关系
       结构：html => .wxml
       逻辑：ts => .js
       样式：scss => .wxss
       配置：app.module  => .json
```

##  使用的第三方插件 

```
  1.富文本编辑器   ngx-quill
    增加响应式布局；增加提交数据post方法
  2.ng-animate  动画库  《需要animation.js》
  3.echarts     canvas 图表库

```

## 结构

```
  1. 主要文件夹
  services ==> 公共服务
     http
     storage
     ajax
  component ==> ng-zorro组件
  
  layout  ==> 基本布局
  
  pages  ==>  一级页面
  
  pipes  ==>  管道过滤器
    pipe
    validator
  class  ==>  类，常量
  
  2. 路由配置
  
  app-routing
  
  3. css样式
    style.scss   =>  全局样式，自定义样式
    assets/*.scss   => ng-zorro主题样式,第三方插件样式

```

