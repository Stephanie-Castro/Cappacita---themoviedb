import { TestBed } from '@angular/core/testing';

import { ConexaoBancoDadosService } from './conexao-banco-dados.service';

describe('ConexaoBancoDadosService', () => {
  let service: ConexaoBancoDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaoBancoDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
