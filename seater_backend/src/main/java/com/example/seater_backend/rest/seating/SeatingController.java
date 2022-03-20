package com.example.seater_backend.rest.seating;

import com.example.seater_backend.domain.Floor;
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

    @GetMapping("/rooms/detail/{roomId}")
    public Room getRoomDetails(@PathVariable Long roomId) {
        return seatingService.getRoomDetails(roomId);
    }

    @GetMapping("/floors")
    public List<Floor> getFloors() {
        return seatingService.getFloors();
    }

    @PostMapping("/rooms/{roomId}/user/{userId}")
    public boolean assignRoomToUser(@PathVariable Long roomId, @PathVariable Long userId) {
        return seatingService.assignRoomToUser(roomId, userId);
    }

    @PostMapping("/rooms/{roomId}/team/{teamId}")
    public boolean assignRoomToTeam(@PathVariable Long roomId, @PathVariable Long teamId) {
        return seatingService.assignRoomToTeam(roomId, teamId);
    }

    @PostMapping("/workstations/{workstationId}/user/{userId}")
    public boolean assignWorkstationToUser(@PathVariable Long workstationId, @PathVariable Long userId) {
        return seatingService.assignWorkstationToUser(workstationId, userId);
    }



}
