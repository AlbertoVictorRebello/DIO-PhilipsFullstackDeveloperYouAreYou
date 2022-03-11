package com.dio_class.devweek.Controller;

import com.dio_class.devweek.Entity.Incidencia;
import com.dio_class.devweek.Repository.IncidenciaRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
class ControllerIncidencia {
    private IncidenciaRepo repository;

    public ControllerIncidencia(IncidenciaRepo repository) {
        this.repository = repository;
    }

    @GetMapping("/incidencia")
    public ResponseEntity<List<Incidencia>> getIncidencia() {
        List<Incidencia> listaOcorrencia = repository.findAll();
        if (listaOcorrencia.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(listaOcorrencia, HttpStatus.OK);
    }

    @GetMapping("/incidencia/{id}")
    public ResponseEntity<Incidencia> getIncidencia(@PathVariable Long id) {
        Optional<Incidencia> incidenciaEscolhida = repository.findById(id);
        if (incidenciaEscolhida.isPresent()) {
            return new ResponseEntity(incidenciaEscolhida.get(), HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/incidencia/nova")
    public Incidencia postRegiao(@RequestBody Incidencia novaIncidencia) {
        return repository.save(novaIncidencia);
    }

    @DeleteMapping("/incidencia/remover/{id}")
    public void deleteIncidencia(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
