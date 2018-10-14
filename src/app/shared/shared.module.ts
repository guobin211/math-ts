import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpModule, HttpClientModule,
  ],
  declarations: [],
  exports: [CommonModule, HttpModule, HttpClientModule,
  ]
})
export class SharedModule { }
