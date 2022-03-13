import { Injectable } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor(private http: HttpClient) { }
  listFaixasetarias(): Observable<FaixaEtaria[]> {
    const url = '/api/faixaEtaria';
    return this.http.get<FaixaEtaria[]>(url)
  }

    /*
    return [
      { id: 1, faixa_i: 0, faixa_n: 14, descricao: 'Até 14 anos' },
      { id: 2, faixa_i: 15, faixa_n: 19, descricao: 'Entre 15 e 19 anos' }
    ];
  }  
  */
}
