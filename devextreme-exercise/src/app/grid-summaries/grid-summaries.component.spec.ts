import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSummariesComponent } from './grid-summaries.component';

describe('GridSummariesComponent', () => {
  let component: GridSummariesComponent;
  let fixture: ComponentFixture<GridSummariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSummariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
