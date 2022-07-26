import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietariosCreateComponent } from './proprietarios-create.component';

describe('ProprietariosCreateComponent', () => {
  let component: ProprietariosCreateComponent;
  let fixture: ComponentFixture<ProprietariosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietariosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietariosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
