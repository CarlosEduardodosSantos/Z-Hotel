import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartosPropriedadesIndividuaisComponent } from './quartos-propriedades-individuais.component';

describe('QuartosPropriedadesIndividuaisComponent', () => {
  let component: QuartosPropriedadesIndividuaisComponent;
  let fixture: ComponentFixture<QuartosPropriedadesIndividuaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartosPropriedadesIndividuaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartosPropriedadesIndividuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
