import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './components/test/test.component';
import {ThreeComponent} from './three/three.component';
import {NgxQuillComponent} from './three/ngx-quill/ngx-quill.component';

const routes: Routes = [{path: '', redirectTo: 'test', pathMatch: 'full'}, {path: 'test', component: TestComponent}, {
  path: 'three',
  component: ThreeComponent,
  data: {keep: true},
  children: [{path: '', redirectTo: 'ngx', pathMatch: 'full'}, {path: 'ngx', component: NgxQuillComponent}]
}, {path: '**', redirectTo: 'test', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
