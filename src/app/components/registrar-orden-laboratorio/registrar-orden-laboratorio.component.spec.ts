import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOrdenLaboratorioComponent } from './registrar-orden-laboratorio.component';

describe('RegistrarOrdenLaboratorioComponent', () => {
  let component: RegistrarOrdenLaboratorioComponent;
  let fixture: ComponentFixture<RegistrarOrdenLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarOrdenLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarOrdenLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
