//package com.elegantemporium.elegantemporiumbackend.controller;
//
//import com.elegantemporium.elegantemporiumbackend.dao.ProductRepository;
//import com.elegantemporium.elegantemporiumbackend.entity.Product;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//public class ProductController {
//    @Autowired
//    private ProductRepository productRepository;
//
//    @GetMapping("/public/products")
//    public List<Product> getProducts() {
//        return productRepository.findAll();
//    }
//}
