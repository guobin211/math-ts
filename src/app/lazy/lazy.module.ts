import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {LazyRoutingModule} from './lazy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [IndexComponent]
})
export class LazyModule { }
