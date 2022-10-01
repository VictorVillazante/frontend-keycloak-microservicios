import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsultasMedicoIdComponent } from './lista-consultas-medico-id.component';

describe('ListaConsultasMedicoIdComponent', () => {
  let component: ListaConsultasMedicoIdComponent;
  let fixture: ComponentFixture<ListaConsultasMedicoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConsultasMedicoIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConsultasMedicoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
