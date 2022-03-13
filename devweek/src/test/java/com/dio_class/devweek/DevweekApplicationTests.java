package com.dio_class.devweek;

import com.dio_class.devweek.Controller.ControllerRegiao;
import com.dio_class.devweek.Entity.RegiaoBrasil;
import com.dio_class.devweek.Repository.RegiaoRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class DevweekApplicationTests {
	private final String URL = "/api/regiao";

	@Autowired
	MockMvc mockmvc;

	@Autowired
	private ObjectMapper objectMapper;

	@Autowired
	private ControllerRegiao controllerRegiao;

	@Autowired
	RegiaoRepo regiaoRepo;

	// Listar os objetos

	@Test
	public void postnovaRegiaoControllerTest() throws Exception{
		RegiaoBrasil novaRegiao = new RegiaoBrasil("RegiaoTeste", 2324);
		mockmvc.perform(post(URL + "/nova")
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(novaRegiao)))
				.andExpect(status().isOk());
	}
	
	@Test
	public void getControllerTest() throws Exception{
		mockmvc.perform(get(URL))
				.andExpect(status().isOk()
				);
	}

	@Test
	public void getByIdControllerTest() throws Exception{
		mockmvc.perform(get(URL + "/1"))
				.andExpect(status().isOk()
				);
	}

	@Test
	public void getByWrongIdControllerTest() throws Exception{
		mockmvc.perform(get(URL + "/" + 1_000_000_000))
				.andExpect(status().isNotFound()
				);
	}



	@Test
	public void deleteRegiaoControllerTest() throws Exception{
		RegiaoBrasil toBeDeleted = regiaoRepo.findByRegiao("RegiaoTeste").get();
		Long idToBeDeleted = toBeDeleted.getId();
		mockmvc.perform(delete(URL + "/" + idToBeDeleted))
				.andExpect(status().isOk());
	}

	private static String asJsonString(final Object obj) {
		try	{
			return new ObjectMapper().writeValueAsString(obj);

		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
