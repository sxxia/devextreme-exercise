import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackedBarComponent } from './full-stacked-bar.component';

describe('FullStackedBarComponent', () => {
  let component: FullStackedBarComponent;
  let fixture: ComponentFixture<FullStackedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullStackedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullStackedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
