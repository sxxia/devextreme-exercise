import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBySideBarChartComponent } from './side-by-side-bar-chart.component';

describe('SideBySideBarChartComponent', () => {
  let component: SideBySideBarChartComponent;
  let fixture: ComponentFixture<SideBySideBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBySideBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBySideBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
