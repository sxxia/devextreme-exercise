import { Component, OnInit } from '@angular/core';

import {ComplaintsWithPercent } from './entities/ComplaintsWithPercent';
import { ComplaintsService } from './services/complaints.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  dataSource: ComplaintsWithPercent[];

  constructor(private complaintsService: ComplaintsService) { }

  ngOnInit() {
    this.dataSource = this.complaintsService.getComplaintsData();
    console.log(this.dataSource);
  }

  customizeTooltip = (info: any) => {
    return {
        html: "<div><div class='tooltip-header'>" +
            info.argumentText + "</div>" +
            "<div class='tooltip-body'><div class='series-name'>" +
            info.points[0].seriesName +
            ": </div><div class='value-text'>" +
            info.points[0].valueText +
            "</div><div class='series-name'>" +
            info.points[1].seriesName +
            ": </div><div class='value-text'>" +
            info.points[1].valueText +
            "% </div></div></div>"
    };
}

customizeLabelText = (info: any) => {
  return info.valueText + "%";
}
}
