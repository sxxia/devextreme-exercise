import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxDataGridModule, DxChartModule } from 'devextreme-angular';
import { SimpleArrayComponent } from './simple-array/simple-array.component';
import { RecordPagingComponent } from './record-paging/record-paging.component';
import { ColumnCustomizationComponent } from './column-customization/column-customization.component';
import { GridSummariesComponent } from './grid-summaries/grid-summaries.component';
import { GridExportComponent } from './grid-export/grid-export.component';
import { SideBySideBarChartComponent } from './side-by-side-bar-chart/side-by-side-bar-chart.component';
import { StandardBarComponent } from './standard-bar/standard-bar.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { FullStackedBarComponent } from './full-stacked-bar/full-stacked-bar.component';
import { SideBySideStackedBarComponent } from './side-by-side-stacked-bar/side-by-side-stacked-bar.component';
import { SideBySideFullStackedBarComponent } from './side-by-side-full-stacked-bar/side-by-side-full-stacked-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleArrayComponent,
    RecordPagingComponent,
    ColumnCustomizationComponent,
    GridSummariesComponent,
    GridExportComponent,
    SideBySideBarChartComponent,
    StandardBarComponent,
    StackedBarComponent,
    FullStackedBarComponent,
    SideBySideStackedBarComponent,
    SideBySideFullStackedBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
