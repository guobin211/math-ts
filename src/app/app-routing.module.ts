import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './component/test/test.component';
import {HomeComponent} from './page/home/home.component';
import {MissComponent} from './page/miss/miss.component';
import {RxjsComponent} from './component/rxjs/rxjs.component';

const routes: Routes = [
  {path: '', redirectTo: 'test', pathMatch: 'full'}, {
    path: 'test',
    component: TestComponent,
    children: [{path: '', redirectTo: 'rxj', pathMatch: 'full'}, {path: 'rxj', component: RxjsComponent}]
  },
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'miss', pathMatch: 'full'},
  {path: 'miss', component: MissComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
