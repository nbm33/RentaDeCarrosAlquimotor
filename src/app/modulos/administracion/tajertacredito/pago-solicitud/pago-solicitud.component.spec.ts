import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoSolicitudComponent } from './pago-solicitud.component';

describe('PagoSolicitudComponent', () => {
  let component: PagoSolicitudComponent;
  let fixture: ComponentFixture<PagoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
