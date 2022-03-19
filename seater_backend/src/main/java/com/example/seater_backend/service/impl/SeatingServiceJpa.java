package com.example.seater_backend.service.impl;

import com.example.seater_backend.dao.*;
import com.example.seater_backend.domain.*;
import com.example.seater_backend.service.RequestDeniedException;
import com.example.seater_backend.service.SeatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatingServiceJpa implements SeatingService {

    @Autowired
    private FloorRepository floorRepo;

    @Autowired
    private RoomRepository roomRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private WorkstationRepository workstationRepo;

    @Autowired
    private TeamRepository teamRepo;

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
    public boolean assignRoomToUser(Long roomId, Long userId) {
        Room room = roomRepo.findById(roomId).orElseThrow(
                () -> new UsernameNotFoundException("Error ")
        );
        User user = userRepo.findById(userId).orElseThrow(
                () -> new UsernameNotFoundException("No username" )
        );

        room.setAssigned(!room.isAssigned());
        room.setRoomAdministrator(user);
        roomRepo.save(room);
        return true;
    }

    @Override
    public boolean assignRoomToTeam(Long roomId, Long teamId) {

        Room room = roomRepo.findById(roomId).orElseThrow(
                () -> new UsernameNotFoundException("Error ")
        );

        Team team = teamRepo.findById(teamId).orElseThrow(
                () -> new UsernameNotFoundException("Error")
        );

        User user = userRepo.findById(team.getTeamAdmin().getId()).orElseThrow(
                () -> new UsernameNotFoundException("No username" )
        );

        room.setAssignedToTeam(!room.isAssignedToTeam());
        room.setAssigned(!room.isAssigned());
        room.setRoomAdministrator(user);
        roomRepo.save(room);

        return true;
    }

    @Override
    public boolean assignWorkstationToUser(Long workstationId, Long userId) {

        Workstation workstation = workstationRepo.findById(workstationId).orElseThrow(
                () -> new UsernameNotFoundException("Error ")
        );
        User user = userRepo.findById(userId).orElseThrow(
                () -> new UsernameNotFoundException("No username" )
        );

        workstation.setAssignee(user);
        workstationRepo.save(workstation);

        return true;
    }

    @Override
    public boolean changeRoomStatus(Long roomId) {
       Room room = roomRepo.findById(roomId).orElseThrow(
               () -> new UsernameNotFoundException("Error")
       );
       if(room.isAssigned()) {
           room.setRoomAdministrator(null);
           room.setAssigned(false);
       } else {
           room.setReservations(null);
           room.setAssigned(true);
       }

       roomRepo.save(room);

       return true;
    }
}

