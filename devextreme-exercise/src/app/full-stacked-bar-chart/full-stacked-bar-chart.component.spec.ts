import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackedBarChartComponent } from './full-stacked-bar-chart.component';

describe('FullStackedBarChartComponent', () => {
  let component: FullStackedBarChartComponent;
  let fixture: ComponentFixture<FullStackedBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullStackedBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
