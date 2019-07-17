import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {
  dataSource = [
  {
    state: "Germany",
    young: 6.7,
    middle: 28.6,
    older: 5.1
  }, 
  {
    state: "Japan",
    young: 9.6,
    middle: 43.4,
    older: 9
  }, 
  {
    state: "Russia",
    young: 13.5,
    middle: 49,
    older: 5.8
  }, 
  {
    state: "USA",
    young: 30,
    middle: 90.3,
    older: 14.5
  }
];

  constructor() { }

  ngOnInit() {
  }

  customizeTooltip(arg: any) {
    return {
        text: arg.seriesName + ' years: ' + arg.valueText
  };
}

}
