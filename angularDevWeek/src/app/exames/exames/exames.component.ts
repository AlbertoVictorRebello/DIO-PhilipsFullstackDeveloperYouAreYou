import { Component, OnInit } from '@angular/core';
import { FaixaEtaria } from '../model/faixa-etaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixa-etaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  ocorrenciaExames: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixasEtarias: FaixaEtaria[] = [];
  constructor(
    private ocorreciaService: OcorrenciaService,
    private regiaoService: RegiaoService,
    private faixaEtariaService: FaixaEtariaService
    ) { }

  ngOnInit(): void {
    this.ocorrenciaExames = this.ocorreciaService.listOcorrencias();
    this.regioes = this.regiaoService.listRegioes();
    this.faixasEtarias = this.faixaEtariaService.listFaixasetarias();
  }

}
