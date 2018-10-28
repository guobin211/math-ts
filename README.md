# GuiServer

> angular6.0 的PWA和服务端渲染
> 

## 使用CLI工具构建步骤
### **第一部分**
1. ng new app --routing
2. cd app
3. ng add @angular/pwa
4. npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader
5. > 在AppModule中增加 withServerTransition() 并带上应用的 ID

>app.module.ts

```ts
@NgModule({
bootstrap: [AppComponent],
imports: [
// Add .withServerTransition() to support Universal rendering.
// The application ID can be any identifier which is unique on
// the page.
BrowserModule.withServerTransition({appId: 'my-app'}),
...
],

})
export class AppModule {}
```

### **第二部分**
#### 1. 创建服务端模块

>app-server.module.ts

```ts
import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
    
import {AppModule} from './app.module';
import {AppComponent} from './app.component';
    
@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule // <-- *Important* to have lazy-loaded routes work
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
```


#### 2.创建一个 main 文件，导出 AppServerModule   

> main.server.ts

```ts
export { AppServerModule } from './app/app.server.module';
```

#### 3.为 AppServerModule 创建配置文件  

> tsconfig.server.js

```js
{
"extends": "../tsconfig.json",
"compilerOptions": {
"outDir": "../out-tsc/app",
"baseUrl": "./",
// Set the module format to "commonjs":
"module": "commonjs",
"types": []
},
"exclude": [
"test.ts",
"**/*.spec.ts"
],
// Add "angularCompilerOptions" with the AppServerModule you wrote
// set as the "entryModule".
"angularCompilerOptions": {
"entryModule": "app/app.server.module#AppServerModule"
}
}
```


#### 4.添加新的构建目标  angular.json
   
``` json
"architect": {
  "build": { ... }
  "server": {
    "builder": "@angular-devkit/build-angular:server",
    "options": {
      "outputPath": "dist/my-project-server",
      "main": "src/main.server.ts",
      "tsConfig": "src/tsconfig.server.json"
    }
  }
}
```

### **设置服务器**

使用express+webpack构建服务器

>需要安装    `webpack-cli` `ts-loader` `express`
> server.ts

```ts
// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

// import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync} from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});

```

> webpack.server.config.js

```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {  server: './server.ts' },
  resolve: { extensions: ['.js', '.ts'] },
  target: 'node',
  mode: 'none',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/node_modules/],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
}
```

## 服务端渲染部分

打包步骤：

```sh
ng build        --dist/browser/
ng app:server       --dist/server/
npm run webpack     --dist/server.js
```

运行：

```js
node dist/server.js
```

package脚本

```js
"server": "ng run gui:server",
"webpack": "webpack --config webpack.server.config.js --progress --colors",
"node": "node dist/server.js"
```

>官方文档：[https://www.angular.cn/guide/universal]()

## 增加组件需要制定模块名

```
ng g c name  --module=app
```

## PWA部分
>参考文档：[https://www.angular.cn/guide/service-worker-intro]()
