import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RdUIKit } from './modules/rd-uikit';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RdUIKit
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
