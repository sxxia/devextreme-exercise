import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bar-chart',
  templateUrl: './new-bar-chart.component.html',
  styleUrls: ['./new-bar-chart.component.scss']
})
export class NewBarChartComponent implements OnInit {
//   dataSource = [{
//     arg: 1950,
//     val: 2525778669
// }, {
//     arg: 1960,
//     val: 3026002942
// }, {
//     arg: 1970,
//     val: 3691172616
// }, {
//     arg: 1980,
//     val: 4449048798
// }, {
//     arg: 1990,
//     val: 5320816667
// }, {
//     arg: 2000,
//     val: 6127700428
// }, {
//     arg: 2010,
//     val: 6916183482
// }];

dataSource = [{
  arg: 1950,
  val: 100
}, {
  arg: 1960,
  val: 120
}, {
  arg: 1970,
  val: 80
}, {
  arg: 1980,
  val: 400
}, {
  arg: 1990,
  val: 200
}, {
  arg: 2000,
  val: 300
}, {
  arg: 2010,
  val: 60
}];

  constructor() { }

  ngOnInit() {
  }

}
