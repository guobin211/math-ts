# GuiServer

> angular6.0 的PWA和服务端渲染
> 

## 使用CLI工具构建步骤
**第一部分**
1. ng new app --routing --style=less
2. cd app
3. ng add @angular/pwa
4. ng g universal --client-project=app
5. ng g app-shell --client-project=app --universal-project=app --route=app-shell-path
>     `第5步或者：ng. g app-shell --client-project=app --universal-project=app`


**第二部分**
1. 更改angular.json配置文件

    ```js
    "app-shell": {
      "builder": "@angular-devkit/build-angular:app-shell",
      "options": {
        "browserTarget": "PWCat:build",
        "serverTarget": "PWCat:server",
        "route": "app-shell-path"
      },
      "configurations": {
        "production": {
          "browserTarget": "PWCat:build:production"
        }
      }
    }
    ```
1. ng run app:app-shell:production
>  dist文件夹

```js
dist/
        app
        app-server
```

3.ng run app:build
> 或者增加npm命令

```js
"build:ssr": "ng run PWCat:app-shell:production && ng run PWCat:build"
```

## 服务端渲染部分

>官方文档：[https://www.angular.cn/guide/universal]()
> 参考文章 1：[https://blog.csdn.net/wf19930209/article/details/80222962]()
> 参考文章2:[ https://www.cnblogs.com/laixiangran/p/8664480.html]()

## PWA部分
>参考文档：[https://www.angular.cn/guide/service-worker-intro]()
