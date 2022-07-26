import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteisListComponent } from './hoteis-list.component';

describe('HoteisListComponent', () => {
  let component: HoteisListComponent;
  let fixture: ComponentFixture<HoteisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
