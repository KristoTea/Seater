package com.example.seater_backend.service;

import com.example.seater_backend.domain.User;
import com.example.seater_backend.rest.user.dto.LoginUserDTO;
import com.example.seater_backend.rest.user.dto.RegisterUserDTO;

import java.util.List;

public interface UserService {

    List<User> listAll();
    User findByUsername(String username);
    boolean checkUsernameUnique(RegisterUserDTO user);
    User registerUser(RegisterUserDTO user);
    boolean checkUsernameExists(LoginUserDTO user);
    boolean checkPassword(LoginUserDTO user);
    boolean deleteUser(Long userId);

}
