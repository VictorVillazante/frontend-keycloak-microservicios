import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReservaAdmComponent } from './registrar-reserva-adm.component';

describe('RegistrarReservaAdmComponent', () => {
  let component: RegistrarReservaAdmComponent;
  let fixture: ComponentFixture<RegistrarReservaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarReservaAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarReservaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
