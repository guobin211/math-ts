/**
 * Author: macbook
 * Date  : 2018/10/17 14:13
 */
import {NgModule} from '@angular/core';
import {NgxQuillComponent} from './ngx-quill/ngx-quill.component';
import {QuillModule} from 'ngx-quill';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [QuillModule, SharedModule,], declarations: [NgxQuillComponent], exports: [QuillModule, NgxQuillComponent]
})
export class ThreeModule {
}
