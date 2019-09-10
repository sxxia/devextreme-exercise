import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csps-bar-chart',
  templateUrl: './csps-bar-chart.component.html',
  styleUrls: ['./csps-bar-chart.component.scss']
})
export class CSPSBarChartComponent implements OnInit {
  dataSource = [{
    field: "Industry 1",
    value: 26
  }, 
  {
    field: "Industry 2",
    value: 60
  }, 
  {
    field: "Industry 3",
    value: 62
  }, 
  {
    field: "Industry 4",
    value: 88
  }, 
  {
    field: "Industry 5",
    value: 110
  }, 
  {
    field: "Industry 6",
    value: 32
  }, 
  {
    field: "Industry 7",
    value: 60
  },
  {
    field: "Industry 8",
    value: 89
  },
  {
    field: "Industry 9",
    value: 20
  },
  {
    field: "Others",
    value: 15
  }
];

  constructor() { }

  ngOnInit() {
  }

}
