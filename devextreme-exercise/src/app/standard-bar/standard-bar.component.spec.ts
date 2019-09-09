import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardBarComponent } from './standard-bar.component';

describe('StandardBarComponent', () => {
  let component: StandardBarComponent;
  let fixture: ComponentFixture<StandardBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
