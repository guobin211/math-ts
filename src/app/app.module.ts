import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

import {TestComponent} from './components/test/test.component';
import {ThreeComponent} from './three/three.component';
import {ThreeModule} from './three/three.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {RouteReuseStrategy} from '@angular/router';
import {AppRoutingCache} from './app-routing.cache';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, TestComponent, ThreeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, SharedModule, ThreeModule],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, {provide: RouteReuseStrategy, useClass: AppRoutingCache}],
  bootstrap: [AppComponent]
})
export class AppModule { }
