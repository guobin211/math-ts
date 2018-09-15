import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N, zh_CN} from 'ng-zorro-antd';
import { HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { RouteReuseStrategy } from "@angular/router";
import { AppRoutingCache } from "./app-routing-cache";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { IndexComponent } from './index/index.component';
import { ColorComponent } from './component/color/color.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: RouteReuseStrategy, useClass: AppRoutingCache}],
  bootstrap: [AppComponent]
})
export class AppModule { }
