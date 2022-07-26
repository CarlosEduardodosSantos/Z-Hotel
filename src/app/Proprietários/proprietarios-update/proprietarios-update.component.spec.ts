import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietariosUpdateComponent } from './proprietarios-update.component';

describe('ProprietariosUpdateComponent', () => {
  let component: ProprietariosUpdateComponent;
  let fixture: ComponentFixture<ProprietariosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietariosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietariosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
