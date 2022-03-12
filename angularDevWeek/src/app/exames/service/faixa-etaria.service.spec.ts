import { TestBed } from '@angular/core/testing';

import { FaixaEtariaService } from './faixa-etaria.service';

describe('FaixaEtariaService', () => {
  let service: FaixaEtariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaixaEtariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
