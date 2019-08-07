import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasDisponiblesComponent } from './aulas-disponibles.component';

describe('AulasDisponiblesComponent', () => {
  let component: AulasDisponiblesComponent;
  let fixture: ComponentFixture<AulasDisponiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulasDisponiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
