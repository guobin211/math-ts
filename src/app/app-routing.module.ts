import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { IndexComponent } from "./index/index.component";
import {ColorComponent} from "./component/color/color.component";

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent, children: [
      {path: '', redirectTo: 'color', pathMatch: 'full'},
      {path: 'color', component: ColorComponent}
    ]},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppRoutingModule { }
