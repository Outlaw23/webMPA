package org.spider.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.spider.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}