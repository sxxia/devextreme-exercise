import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBarWidthChartComponent } from './custom-bar-width-chart.component';

describe('CustomBarWidthChartComponent', () => {
  let component: CustomBarWidthChartComponent;
  let fixture: ComponentFixture<CustomBarWidthChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBarWidthChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBarWidthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
