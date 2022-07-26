import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoCreateComponent } from './movimentacao-create.component';

describe('MovimentacaoCreateComponent', () => {
  let component: MovimentacaoCreateComponent;
  let fixture: ComponentFixture<MovimentacaoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
