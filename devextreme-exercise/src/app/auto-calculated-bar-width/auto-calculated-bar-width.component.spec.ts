import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCalculatedBarWidthComponent } from './auto-calculated-bar-width.component';

describe('AutoCalculatedBarWidthComponent', () => {
  let component: AutoCalculatedBarWidthComponent;
  let fixture: ComponentFixture<AutoCalculatedBarWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCalculatedBarWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCalculatedBarWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
