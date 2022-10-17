import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDatosPacienteComponent } from './ver-datos-paciente.component';

describe('VerDatosPacienteComponent', () => {
  let component: VerDatosPacienteComponent;
  let fixture: ComponentFixture<VerDatosPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDatosPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDatosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
