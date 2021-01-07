package com.ust.flightreservation.services;

import com.ust.flightreservation.dto.ReservationRequest;
import com.ust.flightreservation.entities.Reservation;

public interface ReservationService {
	public Reservation bookFlight(ReservationRequest request);
}
