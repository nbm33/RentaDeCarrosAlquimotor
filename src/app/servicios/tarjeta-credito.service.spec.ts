import { TestBed } from '@angular/core/testing';

import { TarjetaCreditoService } from './tarjeta-credito.service';

describe('TarjetaCreditoService', () => {
  let service: TarjetaCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetaCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
