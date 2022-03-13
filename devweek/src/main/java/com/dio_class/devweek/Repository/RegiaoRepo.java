package com.dio_class.devweek.Repository;

import com.dio_class.devweek.Entity.RegiaoBrasil;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegiaoRepo extends JpaRepository<RegiaoBrasil, Long> {
    Optional<RegiaoBrasil> findByRegiao(String regiao);
}
