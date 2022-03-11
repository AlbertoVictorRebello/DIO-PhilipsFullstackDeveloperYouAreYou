package com.dio_class.devweek.Entity;

import javax.persistence.*;

@Entity
public class RegiaoBrasil {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    @Column
    @OneToMany
    Integer regiao;

    @Column
    Long totalExames;

    public void purchaseParkingPass() {

    }


}
