import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosConsultaAdmComponent } from './datos-consulta-adm.component';

describe('DatosConsultaAdmComponent', () => {
  let component: DatosConsultaAdmComponent;
  let fixture: ComponentFixture<DatosConsultaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosConsultaAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosConsultaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
