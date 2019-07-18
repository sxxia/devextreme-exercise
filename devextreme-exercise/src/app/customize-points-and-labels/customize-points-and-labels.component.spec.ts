import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePointsAndLabelsComponent } from './customize-points-and-labels.component';

describe('CustomizePointsAndLabelsComponent', () => {
  let component: CustomizePointsAndLabelsComponent;
  let fixture: ComponentFixture<CustomizePointsAndLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizePointsAndLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizePointsAndLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
