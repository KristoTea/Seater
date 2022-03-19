package com.example.seater_backend.rest.security;

import com.example.seater_backend.domain.User;
import com.example.seater_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class UserSession {

    @Autowired
    private UserService userService;

    public User getUser() {
        return userService.findByUsername(getUsername());
    }

    public String getUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((SeaterUserDetails) auth.getPrincipal()).getUsername();
    }

}
