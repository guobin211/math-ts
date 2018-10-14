import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {LodashComponent} from './three/lodash/lodash.component';
import {TestComponent} from './component/test/test.component';
import {HomeComponent} from './page/home/home.component';
import {MissComponent} from './page/miss/miss.component';
import {RxjsComponent} from './component/rxjs/rxjs.component';
import {GchartComponent} from './component/gchart/gchart.component';
import {TableComponent} from './page/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    LodashComponent,
    TestComponent, HomeComponent, MissComponent, RxjsComponent, GchartComponent, TableComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
