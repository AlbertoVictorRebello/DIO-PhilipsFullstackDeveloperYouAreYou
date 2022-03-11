package com.dio_class.devweek.Entity;

import javax.persistence.*;

@Entity
@Table(name = "regiao")
public class RegiaoBrasil {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    @Column(name = "regiao")
    String regiao;

    @Column(name = "total_exames")
    Integer totalExames;

    public Long getId() {
        return id;
    }

    public String getRegiao() {
        return regiao;
    }

    public Integer getTotalExames() {
        return totalExames;
    }
}
