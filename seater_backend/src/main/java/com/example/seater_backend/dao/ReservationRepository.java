package com.example.seater_backend.dao;

import com.example.seater_backend.domain.Floor;
import com.example.seater_backend.domain.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    Reservation findById(long floorId);

}
