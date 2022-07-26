import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteisUpdateComponent } from './hoteis-update.component';

describe('HoteisUpdateComponent', () => {
  let component: HoteisUpdateComponent;
  let fixture: ComponentFixture<HoteisUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteisUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteisUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
