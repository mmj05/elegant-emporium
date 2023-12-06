package com.elegantemporium.elegantemporiumbackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "products") // Specify the table name
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name") // Specify the column name
    private String name;

    @Column(name = "price") // Specify the column name
    private double price;

    @Column(name = "gender") // Specify the column name
    private String gender;

    @Column(name = "category") // Specify the column name
    private String category;

    @Column(name = "description") // Specify the column name
    private String description;

    @Column(name = "image") // Specify the column name
    private String image;

    @Column(name = "quantity") // Specify the column name
    private int quantity;

    public Product() {
    }

    public Product(String name, double price, String gender, String category, String description, String image, int quantity) {
        this.name = name;
        this.price = price;
        this.gender = gender;
        this.category = category;
        this.description = description;
        this.image = image;
        this.quantity = quantity;
    }
}

