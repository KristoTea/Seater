package com.example.seater_backend.service.impl;

import com.example.seater_backend.dao.UserRepository;
import com.example.seater_backend.domain.User;
import com.example.seater_backend.rest.user.dto.LoginUserDTO;
import com.example.seater_backend.rest.user.dto.RegisterUserDTO;
import com.example.seater_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceJpa implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public List<User> listAll() {
        return userRepo.findAll();
    }

    @Override
    public User findByUsername(String username) {
       return userRepo.findByUsername(username).orElseThrow(
               () -> new UsernameNotFoundException("No user with username: "+username)
       );
    }

    @Override
    public boolean checkUsernameUnique(RegisterUserDTO user) {
        return userRepo.countByUsername(user.getUsername()) == 0;
    }

    @Override
    public User registerUser(RegisterUserDTO user) {
        //user.setPassword(passwordEncoder.encode(user.getPassword()));
        //return userRepo.save(new User(user, userGenrePreference, location));
        return null;
    }

    @Override
    public boolean checkUsernameExists(LoginUserDTO user) {
        if(userRepo.countByUsername(user.getUsername()) == 0) {
            return false;
        }
        return true;
    }

    @Override
    public boolean checkPassword(LoginUserDTO user) {
        /*
        return passwordEncoder.matches(user.getPassword(),
                userRepo.findByUsername(user.getUsername()).orElseThrow(
                        () -> new UsernameNotFoundException("No user with username: "+user.getUsername())).getPassword());
    }

         */
        return true;
}
}
