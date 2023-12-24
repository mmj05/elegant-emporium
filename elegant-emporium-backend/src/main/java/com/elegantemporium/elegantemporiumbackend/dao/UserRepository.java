package com.elegantemporium.elegantemporiumbackend.dao;

import com.elegantemporium.elegantemporiumbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
