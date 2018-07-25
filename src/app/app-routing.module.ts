import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginComponent} from "./pages/login/login.component";
import {Code404Component} from "./pages/code404/code404.component";
import {ButtonComponent} from "./component/button/button.component";
import {IconComponent} from "./component/icon/icon.component";
import {RegisterComponent} from "./pages/register/register.component";
import {FormComponent} from "./component/form/form.component";
import {StepsComponent} from "./component/steps/steps.component";
import {AnimateComponent} from "./component/animate/animate.component";
import {FeedbackComponent} from "./component/feedback/feedback.component";
import {TableComponent} from "./component/table/table.component";
import {TableajaxComponent} from "./component/tableajax/tableajax.component";
import {QuilleditComponent} from "./plugin/quilledit/quilledit.component";
import {CascadeComponent} from "./component/cascade/cascade.component";
import {CheckboxComponent} from "./component/checkbox/checkbox.component";
import {CalendarComponent} from "./component/calendar/calendar.component";
import {CardComponent} from "./component/card/card.component";
import {EchartsComponent} from "./plugin/echarts/echarts.component";
import {VideoComponent} from "./plugin/video/video.component";
import {ValidatorsComponent} from "./plugin/validators/validators.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: LayoutComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      // dashboard默认主页  在路由配置中传递data数据
      {path: 'dashboard', component: DashboardComponent, data: [{ulName: '仪表盘'}]},
      // component组件部分
      {path: 'button', component: ButtonComponent},
      {path: 'icon', component: IconComponent},
      {path: 'form', component: FormComponent},
      {path: 'steps', component: StepsComponent},
      {path: 'animate', component: AnimateComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'table', component: TableComponent},
      {path: 'ajaxTable', component: TableajaxComponent},
      {path: 'quillEdit', component: QuilleditComponent},
      {path: 'cascade', component: CascadeComponent},
      {path: 'checkbox', component: CheckboxComponent},
      {path: 'calendar', component: CalendarComponent},
      {path: 'card', component: CardComponent},
      {path: 'charts', component: EchartsComponent},
      {path: 'video', component: VideoComponent},
      {path: 'validators', component: ValidatorsComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppRoutingModule { }
