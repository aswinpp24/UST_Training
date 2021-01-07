package com.ust.flightscheckin.integration;

import com.ust.flightscheckin.integration.dto.Reservation;
import com.ust.flightscheckin.integration.dto.ReservationUpdateRequest;

public interface ReservationRestClient {
	public Reservation findReservation(Long id);
	
	public Reservation updateReservation(ReservationUpdateRequest request);
}
