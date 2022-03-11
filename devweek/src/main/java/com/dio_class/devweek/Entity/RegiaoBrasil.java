package com.dio_class.devweek.Entity;

import javax.persistence.*;

@Entity
@Table(name = "regiao")
public class RegiaoBrasil {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    @Column
    String regiao;

    @Column
    Integer totalExames;

}
