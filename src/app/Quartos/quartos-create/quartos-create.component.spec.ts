import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartosCreateComponent } from './quartos-create.component';

describe('QuartosCreateComponent', () => {
  let component: QuartosCreateComponent;
  let fixture: ComponentFixture<QuartosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
