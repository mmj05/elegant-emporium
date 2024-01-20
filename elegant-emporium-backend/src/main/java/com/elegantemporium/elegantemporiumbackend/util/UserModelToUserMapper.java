package com.elegantemporium.elegantemporiumbackend.util;

import com.elegantemporium.elegantemporiumbackend.entity.User;
import com.elegantemporium.elegantemporiumbackend.model.UserModel;
import org.springframework.stereotype.Component;

@Component
public class UserModelToUserMapper {

    public User mapUserModelToUser(UserModel userModel) {
        User user = new User();
        user.setFirstName(userModel.getFirstName());
        user.setLastName(userModel.getLastName());
        user.setEmail(userModel.getEmail());
        user.setPassword(userModel.getPassword());
        user.setRole(userModel.getRole());
        return user;
    }
}
