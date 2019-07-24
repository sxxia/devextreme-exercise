import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExportComponent } from './grid-export.component';

describe('GridExportComponent', () => {
  let component: GridExportComponent;
  let fixture: ComponentFixture<GridExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
