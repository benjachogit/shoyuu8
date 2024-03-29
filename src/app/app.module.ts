import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { NguiInViewComponent } from './ngui-in-view.component';


@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    NguiInViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
