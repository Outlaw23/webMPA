package org.spider.backend.seeders;

import org.spider.backend.entity.Song;
import org.spider.backend.repository.SongRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SongSeeder {

	@Bean
	CommandLineRunner seedSong(SongRepository repository) {
		return args -> {

			if (repository.count() == 0) {

				Song test = new Song();
				test.setTitle("test");
				test.setArtist("test");
				test.setAlbum("test");
				test.setLength(120);


				repository.save(test);


			}
		};
	}
}