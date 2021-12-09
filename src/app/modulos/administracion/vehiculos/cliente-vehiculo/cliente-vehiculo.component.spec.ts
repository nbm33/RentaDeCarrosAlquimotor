import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVehiculoComponent } from './cliente-vehiculo.component';

describe('ClienteVehiculoComponent', () => {
  let component: ClienteVehiculoComponent;
  let fixture: ComponentFixture<ClienteVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
