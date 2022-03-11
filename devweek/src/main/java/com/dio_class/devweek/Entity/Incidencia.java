package com.dio_class.devweek.Entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Incidencia {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    @Column
    Integer regiaoId;

    @Column
    Integer mes;

    @Column
    Integer faixaId;

    @Column
    Long quantidadeExames;


    public <T> validadeExames() {

    }

    public <S> outputAsLabel() {

    }


}
