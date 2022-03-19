package com.example.seater_backend.rest.user;

import com.example.seater_backend.domain.User;
import com.example.seater_backend.rest.user.dto.RegisterUserDTO;
import com.example.seater_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/auth/register")
    public User registerUser(@RequestBody RegisterUserDTO user) {
        if (userService.checkUsernameUnique(user)) {
            return userService.registerUser(user);
        } else {
            throw new IllegalArgumentException("Username already exists.");
        }
    }



}
