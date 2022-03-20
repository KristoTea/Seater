package com.example.seater_backend.service.impl;

import com.example.seater_backend.dao.RoomRepository;
import com.example.seater_backend.dao.UserRepository;
import com.example.seater_backend.domain.Room;
import com.example.seater_backend.domain.User;
import com.example.seater_backend.rest.user.dto.LoginUserDTO;
import com.example.seater_backend.rest.user.dto.RegisterUserDTO;
import com.example.seater_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceJpa implements UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RoomRepository roomRepo;

    @Autowired
    private PasswordEncoder pwdEncoder;

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
        user.setPassword(pwdEncoder.encode(user.getPassword()));
        return userRepo.save(new User(user));
    }

    @Override
    public boolean checkUsernameExists(LoginUserDTO user) {
        return userRepo.countByUsername(user.getUsername()) != 0;
    }

    @Override
    public boolean checkPassword(LoginUserDTO user) {
        return pwdEncoder.matches(user.getPassword(),
                userRepo.findByUsername(user.getUsername()).orElseThrow(
                        () -> new UsernameNotFoundException("No user with username: "+user.getUsername())).getPassword());
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepo.findById(userId).orElseThrow(
                () -> new UsernameNotFoundException("No user with id: "+userId));
        Room room = roomRepo.findRoomByRoomAdmin(user);
        room.setRoomAdministrator(null);
        roomRepo.save(room);
        userRepo.delete(user);
    }

}
