package org.spider.backend.seeders;

import org.spider.backend.entity.Genres;
import org.spider.backend.repository.GenresRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GenresSeeder {

	@Bean
	CommandLineRunner seedGenres(GenresRepository repository) {
		return args -> {

			if (repository.count() == 0) {

				Genres rock = new Genres();
				rock.setName("Rock");

				Genres pop = new Genres();
				pop.setName("Pop");

				Genres jazz = new Genres();
				jazz.setName("Jazz");

				Genres hiphop = new Genres();
				hiphop.setName("Hip Hop");

				Genres classical = new Genres();
				classical.setName("Classical");

				repository.save(rock);
				repository.save(pop);
				repository.save(jazz);
				repository.save(hiphop);
				repository.save(classical);
			}
		};
	}
}