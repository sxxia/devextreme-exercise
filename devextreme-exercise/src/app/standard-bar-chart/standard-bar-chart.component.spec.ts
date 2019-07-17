import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardBarChartComponent } from './standard-bar-chart.component';

describe('StandardBarChartComponent', () => {
  let component: StandardBarChartComponent;
  let fixture: ComponentFixture<StandardBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
