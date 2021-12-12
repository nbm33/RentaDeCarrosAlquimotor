import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorVehiculoComponent } from './asesor-vehiculo.component';

describe('AsesorVehiculoComponent', () => {
  let component: AsesorVehiculoComponent;
  let fixture: ComponentFixture<AsesorVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesorVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
