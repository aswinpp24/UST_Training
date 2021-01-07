package com.ust.flightreservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.flightreservation.entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {

}
