package com.ust.flightreservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.flightreservation.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
