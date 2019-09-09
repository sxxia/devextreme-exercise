import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBySideStackedBarComponent } from './side-by-side-stacked-bar.component';

describe('SideBySideStackedBarComponent', () => {
  let component: SideBySideStackedBarComponent;
  let fixture: ComponentFixture<SideBySideStackedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBySideStackedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBySideStackedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
