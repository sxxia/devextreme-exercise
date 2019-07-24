import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxDataGridModule } from 'devextreme-angular';
import { SimpleArrayComponent } from './simple-array/simple-array.component';
import { RecordPagingComponent } from './record-paging/record-paging.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleArrayComponent,
    RecordPagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
