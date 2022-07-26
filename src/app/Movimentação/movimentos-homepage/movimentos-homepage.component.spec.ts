import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentosHomepageComponent } from './movimentos-homepage.component';

describe('MovimentosHomepageComponent', () => {
  let component: MovimentosHomepageComponent;
  let fixture: ComponentFixture<MovimentosHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentosHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentosHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
