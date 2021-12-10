import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPuntoComponent } from './buscar-punto.component';

describe('BuscarPuntoComponent', () => {
  let component: BuscarPuntoComponent;
  let fixture: ComponentFixture<BuscarPuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
