import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartosUpdateComponent } from './quartos-update.component';

describe('QuartosUpdateComponent', () => {
  let component: QuartosUpdateComponent;
  let fixture: ComponentFixture<QuartosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
