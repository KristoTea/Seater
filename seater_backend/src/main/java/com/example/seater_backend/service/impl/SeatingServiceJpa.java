package com.example.seater_backend.service.impl;

import com.example.seater_backend.dao.FloorRepository;
import com.example.seater_backend.dao.RoomRepository;
import com.example.seater_backend.dao.WorkstationRepository;
import com.example.seater_backend.domain.Floor;
import com.example.seater_backend.domain.Room;
import com.example.seater_backend.service.RequestDeniedException;
import com.example.seater_backend.service.SeatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatingServiceJpa implements SeatingService {

    @Autowired
    private FloorRepository floorRepo;
    private RoomRepository roomRepo;
    private WorkstationRepository workstationRepo;

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

    @Override
    @Modifying
    @Query(("UPDATE room r SET r.room_administrator_id = :userId WHERE r.id = :roomId"))
    public boolean assignRoomToUser(@Param("roomId") Long roomId, @Param("userId") Long userId) {
        return true;
    }

    @Override
    public boolean assignRoomToTeam(Long roomId, Long teamId) {
        return true;
    }

    @Override
    @Modifying
    @Query(("UPDATE room w SET w.assignee_id = :userId WHERE w.id = :workstationId"))
    public boolean assignWorkstationToUser(Long workstationId, Long userId) {
        return true;
    }
}

