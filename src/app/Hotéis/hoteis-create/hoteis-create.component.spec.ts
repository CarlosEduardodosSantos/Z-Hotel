import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteisCreateComponent } from './hoteis-create.component';

describe('HoteisCreateComponent', () => {
  let component: HoteisCreateComponent;
  let fixture: ComponentFixture<HoteisCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteisCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteisCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
