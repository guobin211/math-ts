import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
   SharedModule,
  ],
  declarations: [
    HeaderComponent,
    SideBarComponent,
    NotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    NotFoundComponent,
  ]
})
export class CoreModule { }
