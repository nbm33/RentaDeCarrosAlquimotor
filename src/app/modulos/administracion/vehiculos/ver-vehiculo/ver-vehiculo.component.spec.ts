import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVehiculoComponent } from './ver-vehiculo.component';

describe('VerVehiculoComponent', () => {
  let component: VerVehiculoComponent;
  let fixture: ComponentFixture<VerVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
