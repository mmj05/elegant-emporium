package com.elegantemporium.elegantemporiumbackend.controller;

import com.elegantemporium.elegantemporiumbackend.dao.UserRepository;
import com.elegantemporium.elegantemporiumbackend.entity.User;
import com.elegantemporium.elegantemporiumbackend.model.UserModel;
import com.elegantemporium.elegantemporiumbackend.util.UserModelToUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserModelToUserMapper userModelToUserMapper;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserModel userModel) {
        if (userRepository.existsByEmail(userModel.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already taken!");
        }

        User user = userModelToUserMapper.mapUserModelToUser(userModel);
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }
}
