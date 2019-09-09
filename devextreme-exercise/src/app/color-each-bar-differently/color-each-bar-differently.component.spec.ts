import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorEachBarDifferentlyComponent } from './color-each-bar-differently.component';

describe('ColorEachBarDifferentlyComponent', () => {
  let component: ColorEachBarDifferentlyComponent;
  let fixture: ComponentFixture<ColorEachBarDifferentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorEachBarDifferentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorEachBarDifferentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
