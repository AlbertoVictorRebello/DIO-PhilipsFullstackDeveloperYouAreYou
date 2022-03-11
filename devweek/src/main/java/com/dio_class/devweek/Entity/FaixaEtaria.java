package com.dio_class.devweek.Entity;

import javax.persistence.*;

@Entity
@Table(name = "faixa_etaria")
public class FaixaEtaria {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    @Column(name = "Faixa_i")
    Integer faixaInicial;

    @Column(name = "Faixa_n")
    Integer faixaFinal;

    @Column(name = "Descricao")
    String descricao;

    public Long getId() {
        return id;
    }

    public Integer getFaixaInicial() {
        return faixaInicial;
    }

    public Integer getFaixaFinal() {
        return faixaFinal;
    }

    public String getDescricao() {
        return descricao;
    }
}
