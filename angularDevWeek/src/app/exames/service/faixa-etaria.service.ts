import { Injectable } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor() { }
  listFaixasetarias(): FaixaEtaria[] {
    return [
      { id: 1, faixa_i: 0, faixa_n: 14, descricao: 'Até 14 anos' },
      { id: 2, faixa_i: 15, faixa_n: 19, descricao: 'Entre 15 e 19 anos' }
    ];
  }  
}
