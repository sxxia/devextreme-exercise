import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSPSBarChartComponent } from './csps-bar-chart.component';

describe('CSPSBarChartComponent', () => {
  let component: CSPSBarChartComponent;
  let fixture: ComponentFixture<CSPSBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSPSBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSPSBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
