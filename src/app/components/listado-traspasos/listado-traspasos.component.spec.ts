import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTraspasosComponent } from './listado-traspasos.component';

describe('ListadoTraspasosComponent', () => {
  let component: ListadoTraspasosComponent;
  let fixture: ComponentFixture<ListadoTraspasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTraspasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTraspasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
