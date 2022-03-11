package com.dio_class.devweek.Controller;

import com.dio_class.devweek.Entity.RegiaoBrasil;
import com.dio_class.devweek.Repository.RegiaoRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ControllerRegiao {
    private RegiaoRepo repository;

    public ControllerRegiao(RegiaoRepo repository) {
        this.repository = repository;
    }

    @GetMapping("/isOnline")
    public String isOnline() {
        return "A Rest API está online";
    }

    @GetMapping("/regiao")
    public ResponseEntity<List<RegiaoBrasil>> getRegiao() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/regiao/{id}")
    public ResponseEntity<RegiaoBrasil> getRegiaoById(@PathVariable Long id) {
        Optional regiaoEscolhida = repository.findById(id);
        if (regiaoEscolhida.isPresent()) {
            return new ResponseEntity(regiaoEscolhida.get(), HttpStatus.OK);

        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/regiao/novo")
    public RegiaoBrasil postRegiao(@RequestBody RegiaoBrasil novaRegiao) {
        return repository.save(novaRegiao);
    }

    @DeleteMapping("/regiao/{id}")
    public void deleteRegiao(@PathVariable Long id) {
        repository.deleteById(id);
    }


}
