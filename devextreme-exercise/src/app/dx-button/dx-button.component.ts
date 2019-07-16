import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dx-button',
  templateUrl: './dx-button.component.html',
  styleUrls: ['./dx-button.component.scss']
})
export class DxButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMessage() {
    alert('This is the first Dxextreme project');
  }

}
