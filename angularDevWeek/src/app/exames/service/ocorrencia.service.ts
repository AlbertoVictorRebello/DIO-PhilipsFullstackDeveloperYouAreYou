import { Injectable } from '@angular/core';
import { Ocorrencia } from '../model/ocorrencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor(private http: HttpClient) { }
    
  listOcorrencias(): Observable<Ocorrencia[]> {
    const url = '/api/ocorrencia';   
    return this.http.get<Ocorrencia[]>(url)
  } 
  
}
