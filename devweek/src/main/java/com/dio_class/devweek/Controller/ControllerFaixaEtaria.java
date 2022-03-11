package com.dio_class.devweek.Controller;

import com.dio_class.devweek.Entity.FaixaEtaria;
import com.dio_class.devweek.Repository.FaixaEtariaRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
class ControllerFaixaEtaria {
    private FaixaEtariaRepo repository;

    public ControllerFaixaEtaria(FaixaEtariaRepo repository) {
        this.repository = repository;
    }

    @GetMapping("/faixaEtaria")
    public ResponseEntity<List<FaixaEtaria>> getFaixaEtaria() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/faixaEtaria/{id}")
    public ResponseEntity<?> getFaixaEtaria(@PathVariable Long id) {
        Optional faixaEtariaEscolhida = repository.findById(id);
        if (faixaEtariaEscolhida.isPresent()) {
            return new ResponseEntity(faixaEtariaEscolhida.get(), HttpStatus.OK);

        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/faixaEtaria/nova")
    public FaixaEtaria postRegiao(@RequestBody FaixaEtaria novaFaixaEtaria) {
        return repository.save(novaFaixaEtaria);
    }

    @DeleteMapping("/faixaEtaria/remover/{id}")
    public void deleteFaixaEtaria(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
