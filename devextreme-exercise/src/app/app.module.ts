import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxChartModule } from 'devextreme-angular';
import { DxButtonComponent } from './dx-button/dx-button.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NewBarChartComponent } from './new-bar-chart/new-bar-chart.component';
import { StandardBarChartComponent } from './standard-bar-chart/standard-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DxButtonComponent,
    BarChartComponent,
    NewBarChartComponent,
    StandardBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
