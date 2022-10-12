import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTraspasoComponent } from './registrar-traspaso.component';

describe('RegistrarTraspasoComponent', () => {
  let component: RegistrarTraspasoComponent;
  let fixture: ComponentFixture<RegistrarTraspasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTraspasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTraspasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
