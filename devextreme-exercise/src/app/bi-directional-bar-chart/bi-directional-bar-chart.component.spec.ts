import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiDirectionalBarChartComponent } from './bi-directional-bar-chart.component';

describe('BiDirectionalBarChartComponent', () => {
  let component: BiDirectionalBarChartComponent;
  let fixture: ComponentFixture<BiDirectionalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiDirectionalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiDirectionalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
