package com.example.seater_backend.service;

import com.example.seater_backend.domain.Floor;
import com.example.seater_backend.domain.Room;

import java.util.List;
import java.util.Optional;

public interface SeatingService {

    List<Room> getRooms(Long floorId);
    List<Floor> getFloors();

}
