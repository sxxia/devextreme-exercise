import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBreaksComponent } from './scale-breaks.component';

describe('ScaleBreaksComponent', () => {
  let component: ScaleBreaksComponent;
  let fixture: ComponentFixture<ScaleBreaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleBreaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
