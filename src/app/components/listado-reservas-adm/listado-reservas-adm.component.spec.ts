import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReservasAdmComponent } from './listado-reservas-adm.component';

describe('ListadoReservasAdmComponent', () => {
  let component: ListadoReservasAdmComponent;
  let fixture: ComponentFixture<ListadoReservasAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoReservasAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoReservasAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
