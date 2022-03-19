package com.example.seater_backend.dao;

import com.example.seater_backend.domain.Floor;
import com.example.seater_backend.domain.Reservation;
import com.example.seater_backend.domain.Workstation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkstationRepository extends JpaRepository<Workstation, Long> {
    Workstation findById(long floorId);

}
