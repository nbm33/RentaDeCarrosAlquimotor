import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTarjetaComponent } from './eliminar-tarjeta.component';

describe('EliminarTarjetaComponent', () => {
  let component: EliminarTarjetaComponent;
  let fixture: ComponentFixture<EliminarTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
