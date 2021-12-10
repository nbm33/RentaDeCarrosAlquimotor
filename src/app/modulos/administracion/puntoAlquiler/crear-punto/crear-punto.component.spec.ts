import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPuntoComponent } from './crear-punto.component';

describe('CrearPuntoComponent', () => {
  let component: CrearPuntoComponent;
  let fixture: ComponentFixture<CrearPuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPuntoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
