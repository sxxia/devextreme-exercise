import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPagingComponent } from './record-paging.component';

describe('RecordPagingComponent', () => {
  let component: RecordPagingComponent;
  let fixture: ComponentFixture<RecordPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
