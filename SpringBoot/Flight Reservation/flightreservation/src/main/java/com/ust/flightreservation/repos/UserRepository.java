package com.ust.flightreservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.flightreservation.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
	
	Users findByEmail(String email);
}
