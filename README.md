# NZ-Admin

```
  使用 angular 和 ng-zorro 构建跨平台应用
  
  特点：

```

##  使用的第三方插件 

```
  1.富文本编辑器  ngx-quill
  2.ng-animate  快速动画库 --需要animation.js

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
  
  pages  ==>  一级路由页面
  
  pipes  ==>  管道过滤器
    pipe
    validator
  class  ==>  类
  
  2. 路由配置
  app-routing
  
  3. css样式
    style.scss   =>  全局样式，自定义样式
    assets/*.scss   => ng-zorro主题样式,第三方插件样式

```

