package com.elegantemporium.elegantemporiumbackend.Service;

import com.elegantemporium.elegantemporiumbackend.entity.User;
import com.elegantemporium.elegantemporiumbackend.model.UserModel;

public interface UserService {
    User registerUser(UserModel userModel);
}