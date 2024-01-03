package com.elegantemporium.elegantemporiumbackend.dao;

import com.elegantemporium.elegantemporiumbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
