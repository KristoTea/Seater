package com.example.seater_backend.dao;

import com.example.seater_backend.domain.Floor;
import com.example.seater_backend.domain.Reservation;
import com.example.seater_backend.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {

    Room findById(long floorId);

}
