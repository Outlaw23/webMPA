package org.spider.backend.controller;

import org.spider.backend.entity.Genres;
import org.spider.backend.repository.GenresRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/genres")
@CrossOrigin(origins = "http://localhost:5173")
public class GenresController {

	private final GenresRepository repository;

	public GenresController(GenresRepository repository) {
		this.repository = repository;
	}

	@GetMapping
	public List<Genres> getAllGenres() {
		return repository.findAll();
	}
}