import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {MultiplePipe} from './pipes/multiple.pipe';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {Code404Component} from './pages/code404/code404.component';
import {LoginComponent} from './pages/login/login.component';
import {ButtonComponent} from './component/button/button.component';
import {IconComponent} from './component/icon/icon.component';
import {RegisterComponent} from './pages/register/register.component';
import {FormComponent} from './component/form/form.component';
import {StepsComponent} from './component/steps/steps.component';
import {AnimateComponent} from './component/animate/animate.component';
import {FeedbackComponent} from './component/feedback/feedback.component';
import {TableComponent} from './component/table/table.component';
import {TableajaxComponent} from './component/tableajax/tableajax.component';
import {QuilleditComponent} from './plugin/quilledit/quilledit.component';
import {QuillModule} from "ngx-quill";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MultiplePipe,
    LayoutComponent,
    DashboardComponent,
    Code404Component,
    LoginComponent,
    ButtonComponent,
    IconComponent,
    RegisterComponent,
    FormComponent,
    StepsComponent,
    AnimateComponent,
    FeedbackComponent,
    TableComponent,
    TableajaxComponent,
    QuilleditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule,
    NgZorroAntdModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule { }
