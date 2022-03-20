package com.example.seater_backend.dao;

import com.example.seater_backend.domain.Floor;
import com.example.seater_backend.domain.Reservation;
import com.example.seater_backend.domain.Room;
import com.example.seater_backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    Room findById(long floorId);

    @Query("SELECT r FROM room r WHERE r.roomAdministrator= :user")
    Room findRoomByRoomAdmin(@Param("user") User user);

}
