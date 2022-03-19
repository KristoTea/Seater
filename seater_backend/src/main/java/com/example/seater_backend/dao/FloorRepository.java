package com.example.seater_backend.dao;

import com.example.seater_backend.domain.Floor;
import com.example.seater_backend.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FloorRepository extends JpaRepository<Floor, Long> {

    Floor findById(long floorId);
}

