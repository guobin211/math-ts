import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
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
import {HttpModule, JsonpModule} from "@angular/http";
import {CascadeComponent} from './component/cascade/cascade.component';
import {CheckboxComponent} from './component/checkbox/checkbox.component';
import {CalendarComponent} from './component/calendar/calendar.component';
import {CardComponent} from './component/card/card.component';
import {EchartsComponent} from './plugin/echarts/echarts.component';
import {VideoComponent} from './plugin/video/video.component';
import {VgCoreModule} from "videogular2/core";
import {VgControlsModule} from "videogular2/controls";
import {VgOverlayPlayModule} from "videogular2/overlay-play";
import {VgBufferingModule} from "videogular2/buffering";
import {ValidatorsComponent} from './plugin/validators/validators.component';
import {EchartOptionDirective} from './plugin/echarts/echart-option.directive';
// import {NgxEchartsModule} from "ngx-echarts";

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
    QuilleditComponent,
    CascadeComponent,
    CheckboxComponent,
    CalendarComponent,
    CardComponent,
    EchartsComponent,
    VideoComponent,
    ValidatorsComponent,
    EchartOptionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    QuillModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgZorroAntdModule,
    // NgxEchartsModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN},
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
