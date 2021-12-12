import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorSolicitudComponent } from './asesor-solicitud.component';

describe('AsesorSolicitudComponent', () => {
  let component: AsesorSolicitudComponent;
  let fixture: ComponentFixture<AsesorSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
