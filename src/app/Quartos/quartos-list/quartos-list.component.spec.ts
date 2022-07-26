import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartosListComponent } from './quartos-list.component';

describe('QuartosListComponent', () => {
  let component: QuartosListComponent;
  let fixture: ComponentFixture<QuartosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
