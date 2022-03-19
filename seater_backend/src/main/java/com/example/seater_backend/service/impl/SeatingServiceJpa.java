package com.example.seater_backend.service.impl;

import com.example.seater_backend.dao.FloorRepository;
import com.example.seater_backend.domain.Floor;
import com.example.seater_backend.domain.Room;
import com.example.seater_backend.service.RequestDeniedException;
import com.example.seater_backend.service.SeatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatingServiceJpa implements SeatingService {

    @Autowired
    private FloorRepository floorRepo;



    @Override
    public List<Room> getRooms(Long floorId) {
        Floor floor = floorRepo.findById(floorId).orElseThrow(
                () -> new RequestDeniedException("No floor with id " + floorId)
        );
        return floor.getRooms();
    }

    public List<Floor> getFloors() {
        return floorRepo.findAll();
    }
}

