import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgZorroAntdModule,],
  declarations: [],
  exports: [CommonModule, FormsModule, HttpClientModule, NgZorroAntdModule,]
})
export class SharedModule {
}
