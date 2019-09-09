import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-by-side-bar-chart',
  templateUrl: './side-by-side-bar-chart.component.html',
  styleUrls: ['./side-by-side-bar-chart.component.scss']
})
export class SideBySideBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataSource = [{
    state: "Illinois",
    year1998: 423.721,
    year2001: 476.851,
  }, {
    state: "Indiana",
    year1998: 178.719,
    year2001: 195.769,
  }, {
    state: "Michigan",
    year1998: 308.845,
    year2001: 335.793,
  }, {
    state: "Ohio",
    year1998: 348.555,
    year2001: 374.771,
  }, {
    state: "Wisconsin",
    year1998: 160.274,
    year2001: 182.373,
  }];

  onPointClick(e: any) {
    e.target.select();
  }

}
