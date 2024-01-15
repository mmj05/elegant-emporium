//package com.elegantemporium.elegantemporiumbackend.controller;
//
//import com.elegantemporium.elegantemporiumbackend.model.UserModel;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class LoginController {
//
//    private final AuthenticationManager authenticationManager;
//
//    public LoginController(AuthenticationManager authenticationManager) {
//        this.authenticationManager = authenticationManager;
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<Void> login(@RequestBody UserModel loginRequest) {
//        return ResponseEntity.ok().build();
//    }
//}
