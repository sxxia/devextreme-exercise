import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCalculatedBarWidthChartComponent } from './auto-calculated-bar-width-chart.component';

describe('AutoCalculatedBarWidthChartComponent', () => {
  let component: AutoCalculatedBarWidthChartComponent;
  let fixture: ComponentFixture<AutoCalculatedBarWidthChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCalculatedBarWidthChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCalculatedBarWidthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
