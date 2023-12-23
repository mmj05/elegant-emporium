package com.elegantemporium.elegantemporiumbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @Column(name = "username", length = 50)
    private String username;

    @Column(name = "password", length = 500)
    private String password;

    @Column(name = "enabled")
    private boolean enabled;
}
