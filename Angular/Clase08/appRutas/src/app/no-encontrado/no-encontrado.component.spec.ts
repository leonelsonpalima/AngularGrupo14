import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEncontradoComponent } from './no-encontrado.component';

describe('NoEncontradoComponent', () => {
  let component: NoEncontradoComponent;
  let fixture: ComponentFixture<NoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
