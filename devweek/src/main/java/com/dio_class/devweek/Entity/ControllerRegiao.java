package com.dio_class.devweek.Entity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerRegiao {

    @GetMapping("/regiao")
    public List<Regiao> getRegiao() {

    }
}
