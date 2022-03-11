package com.dio_class.devweek.Entity;

import javax.persistence.*;

@Entity
@Table(name = "incidencia_exame")
public class Incidencia {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    @Column(name = "Regiao_id")
    Integer regiaoId;

    @Column(name = "Mes")
    Integer mes;

    @Column(name = "Faixa_id")
    Integer faixaId;

    @Column(name = "Qnt_exames")
    Integer quantidadeExames;

    public Long getId() {
        return id;
    }

    public Integer getRegiaoId() {
        return regiaoId;
    }

    public Integer getMes() {
        return mes;
    }

    public Integer getFaixaId() {
        return faixaId;
    }

    public Integer getQuantidadeExames() {
        return quantidadeExames;
    }
}
