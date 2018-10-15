import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ViserModule} from 'viser-ng';

@NgModule({
  imports: [CommonModule, HttpModule, HttpClientModule, ViserModule,
  ],
  declarations: [], exports: [CommonModule, HttpModule, HttpClientModule, ViserModule,
  ]
})
export class SharedModule { }
