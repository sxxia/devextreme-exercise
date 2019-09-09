import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBarWidthComponent } from './custom-bar-width.component';

describe('CustomBarWidthComponent', () => {
  let component: CustomBarWidthComponent;
  let fixture: ComponentFixture<CustomBarWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBarWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBarWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
