import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPuntoComponent } from './editar-punto.component';

describe('EditarPuntoComponent', () => {
  let component: EditarPuntoComponent;
  let fixture: ComponentFixture<EditarPuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
