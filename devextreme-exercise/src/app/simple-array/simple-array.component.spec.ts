import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleArrayComponent } from './simple-array.component';

describe('SimpleArrayComponent', () => {
  let component: SimpleArrayComponent;
  let fixture: ComponentFixture<SimpleArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
