package com.dio_class.devweek.Entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class FaixaEtaria {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    @Column
    Integer faixaInicial;

    @Column
    Integer faixaFinal;

}
