package com.example.seater_backend.rest.user;

import com.example.seater_backend.domain.Room;
import com.example.seater_backend.domain.User;
import com.example.seater_backend.rest.user.dto.RegisterUserDTO;
import com.example.seater_backend.service.SeatingService;
import com.example.seater_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/seating")
public class SeatingController {

    @Autowired
    private SeatingService seatingService;

    @GetMapping("/rooms/{floorId}")
    public List<Room> getRooms(@PathVariable Long floorId) {
        return seatingService.getRooms(floorId);
    }



}
