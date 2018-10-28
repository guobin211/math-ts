import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HomeChildComponent} from './home-child/home-child.component';
import {DetailComponent} from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    HomeChildComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({appId: 'gui'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
