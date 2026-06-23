package org.spider.backend.service;

import org.spider.backend.entity.Song;
import org.spider.backend.repository.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService {

	private final SongRepository songRepository;

	public SongService(SongRepository songRepository) {
		this.songRepository = songRepository;
	}

	public List<Song> getAllSongs() {
		return songRepository.findAll();
	}
}