import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-bar-chart',
  templateUrl: './standard-bar-chart.component.html',
  styleUrls: ['./standard-bar-chart.component.scss']
})
export class StandardBarChartComponent implements OnInit {
  dataSource = [
  {
    day: "Monday",
    oranges: 3
  }, 
  {
    day: "Tuesday",
    oranges: 2
  }, 
  {
    day: "Wednesday",
    oranges: 3
  }, 
  {
    day: "Thursday",
    oranges: 4
  }, 
  {
    day: "Friday",
    oranges: 6
  }, 
  {
    day: "Saturday",
    oranges: 11
  }, 
  {
    day: "Sunday",
    oranges: 4
  }
];

  constructor() { }

  ngOnInit() {
  }

}
