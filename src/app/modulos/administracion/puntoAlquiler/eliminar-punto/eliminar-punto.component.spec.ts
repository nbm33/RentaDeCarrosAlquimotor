import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPuntoComponent } from './eliminar-punto.component';

describe('EliminarPuntoComponent', () => {
  let component: EliminarPuntoComponent;
  let fixture: ComponentFixture<EliminarPuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
