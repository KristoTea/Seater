package com.example.seater_backend.rest.user;

import com.example.seater_backend.domain.User;
import com.example.seater_backend.rest.security.SeaterUserDetails;
import com.example.seater_backend.rest.security.UserSession;
import com.example.seater_backend.rest.security.jwt.JwtResponse;
import com.example.seater_backend.rest.security.jwt.JwtUtils;
import com.example.seater_backend.rest.user.dto.LoginUserDTO;
import com.example.seater_backend.rest.user.dto.RegisterUserDTO;
import com.example.seater_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserSession userSession;

    @PostMapping("/auth/register")
    public User registerUser(@RequestBody RegisterUserDTO user) {
        if (userService.checkUsernameUnique(user)) {
            return userService.registerUser(user);
        } else {
            throw new IllegalArgumentException("Username already exists.");
        }
    }

    private ResponseEntity<Object> authenticateUser(LoginUserDTO user) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        SeaterUserDetails userDetails = (SeaterUserDetails) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.user.getId(),
                userDetails.getUsername(),
                roles));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<Object> loginUser(@RequestBody LoginUserDTO user) {
        if (userService.checkUsernameExists(user) && userService.checkPassword(user)) {
            return authenticateUser(user);
        } else {
            throw new IllegalArgumentException("Invalid username/password.");
        }
    }

    @GetMapping("")
    public List<User> listUsers() {
        return userService.listAll();
    }




}
