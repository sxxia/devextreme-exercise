import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxButtonComponent } from './dx-button/dx-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DxButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
