import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HomeChildComponent} from './home-child/home-child.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    // {path: '', redirectTo: 'child', pathMatch: 'full'},
    {path: 'child', component: HomeChildComponent}
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
