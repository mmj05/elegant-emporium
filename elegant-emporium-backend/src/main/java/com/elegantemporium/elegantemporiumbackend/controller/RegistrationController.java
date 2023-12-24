package com.elegantemporium.elegantemporiumbackend.controller;

import com.elegantemporium.elegantemporiumbackend.Service.UserService;
import com.elegantemporium.elegantemporiumbackend.entity.User;
import com.elegantemporium.elegantemporiumbackend.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userModel) {
        User user = userService.registerUser(userModel);
        return "Successfully registered user: " + user.getEmail() + ".";
    }
}
