import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsultasPacienteIdComponent } from './lista-consultas-paciente-id.component';

describe('ListaConsultasPacienteIdComponent', () => {
  let component: ListaConsultasPacienteIdComponent;
  let fixture: ComponentFixture<ListaConsultasPacienteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConsultasPacienteIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConsultasPacienteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
