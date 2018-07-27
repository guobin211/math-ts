## 项目初始化

``` ng add ng-zorro-antd [options] 

--theme
  ng-zorro-antd 会自动降级 less 版本至 2.7 并在 src 目录下生成 theme.less 的主题配置文件
  --i18n
  --i18n=[语言] 
```

### 生成组件命令

```
  ng g ng-zorro-antd:[template] --name=NAME [options]
  
```

### 通过以下代码可以快速生成一个登陆框组件

```
  ng g ng-zorro-antd:form-normal-login -p app --styleext='less' --name=login

```

###  生成组件参数

```     
     --name
     
     组件名称(必选)
     
     --styleext
     
     样式文件扩展名（默认 css）
     
     --prefix, -p
     
     组件选择器前缀
     
     --inlineStyle, -s
     
     使用行内样式
     
     --inlineTemplate, -t
     
     使用行内模版
     
     --path
     
     指定组件创建目录（相当于执行时所在的目录）
     
     --spec
     
     是否生成 .spec 测试文件
     
     --skipImport
     
     是否跳过模块引入（及导入所属模块）
     
     --selector
     
     选择器名称（默认根据 name 自动生成）
     
     --export
     
     是否将组件声明在模块的 exports
     
     --module, -m
     
     指定要声明的模块名
     
     ```
