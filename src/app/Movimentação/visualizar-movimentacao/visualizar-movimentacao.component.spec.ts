import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMovimentacaoComponent } from './visualizar-movimentacao.component';

describe('VisualizarMovimentacaoComponent', () => {
  let component: VisualizarMovimentacaoComponent;
  let fixture: ComponentFixture<VisualizarMovimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarMovimentacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
