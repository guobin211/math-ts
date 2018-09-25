import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent} from './component/test/test.component';
import { HomeComponent} from './page/home/home.component';
import { MissComponent} from './page/miss/miss.component';

const routes: Routes = [
  {path: '', redirectTo: 'test', pathMatch: 'full'},
  {path: 'test', component: TestComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'miss', pathMatch: 'full'},
  {path: 'miss', component: MissComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
