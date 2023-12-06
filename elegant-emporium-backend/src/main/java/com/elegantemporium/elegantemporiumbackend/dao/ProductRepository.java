package com.elegantemporium.elegantemporiumbackend.dao;

import com.elegantemporium.elegantemporiumbackend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
