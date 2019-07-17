import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBarChartComponent } from './new-bar-chart.component';

describe('NewBarChartComponent', () => {
  let component: NewBarChartComponent;
  let fixture: ComponentFixture<NewBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
