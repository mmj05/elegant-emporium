package com.elegantemporium.elegantemporiumbackend.dao;

import com.elegantemporium.elegantemporiumbackend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestController
@CrossOrigin(origins = "http://localhost:3000")
public interface ProductRepository extends JpaRepository<Product, Long> {
}
