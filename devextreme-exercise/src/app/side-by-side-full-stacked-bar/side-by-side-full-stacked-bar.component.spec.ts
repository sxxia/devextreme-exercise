import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBySideFullStackedBarComponent } from './side-by-side-full-stacked-bar.component';

describe('SideBySideFullStackedBarComponent', () => {
  let component: SideBySideFullStackedBarComponent;
  let fixture: ComponentFixture<SideBySideFullStackedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBySideFullStackedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBySideFullStackedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
