import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './component/test/test.component';
import {HomeComponent} from './page/home/home.component';
import {MissComponent} from './page/miss/miss.component';
import {RxjsComponent} from './component/rxjs/rxjs.component';
import {GchartComponent} from './component/gchart/gchart.component';
import {TableComponent} from './page/table/table.component';

const routes: Routes = [
  {path: '', redirectTo: 'test', pathMatch: 'full'}, {
    path: 'test',
    component: TestComponent,
    children: [{path: '', redirectTo: 'rxj', pathMatch: 'full'}, {path: 'rxj', component: RxjsComponent}, {
      path: 'chart',
      component: GchartComponent
    }]
  },
  {path: 'home', component: HomeComponent}, {path: 'table', component: TableComponent},
  {path: '**', redirectTo: 'miss', pathMatch: 'full'},
  {path: 'miss', component: MissComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
