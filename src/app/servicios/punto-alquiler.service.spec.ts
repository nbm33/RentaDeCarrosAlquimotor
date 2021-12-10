import { TestBed } from '@angular/core/testing';

import { PuntoAlquilerService } from './punto-alquiler.service';

describe('PuntoAlquilerService', () => {
  let service: PuntoAlquilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoAlquilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
