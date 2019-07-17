import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxChartModule } from 'devextreme-angular';
import { DxButtonComponent } from './dx-button/dx-button.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NewBarChartComponent } from './new-bar-chart/new-bar-chart.component';
import { StandardBarChartComponent } from './standard-bar-chart/standard-bar-chart.component';
import { SideBySideBarChartComponent } from './side-by-side-bar-chart/side-by-side-bar-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { FullStackedBarChartComponent } from './full-stacked-bar-chart/full-stacked-bar-chart.component';
import { SideBySideStackedBarComponent } from './side-by-side-stacked-bar/side-by-side-stacked-bar.component';
import { DrillDownComponent } from './drill-down/drill-down.component';
import { SideBySideFullStackedBarComponent } from './side-by-side-full-stacked-bar/side-by-side-full-stacked-bar.component';
import { AutoCalculatedBarWidthChartComponent } from './auto-calculated-bar-width-chart/auto-calculated-bar-width-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DxButtonComponent,
    BarChartComponent,
    NewBarChartComponent,
    StandardBarChartComponent,
    SideBySideBarChartComponent,
    StackedBarChartComponent,
    FullStackedBarChartComponent,
    SideBySideStackedBarComponent,
    DrillDownComponent,
    SideBySideFullStackedBarComponent,
    AutoCalculatedBarWidthChartComponent
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
