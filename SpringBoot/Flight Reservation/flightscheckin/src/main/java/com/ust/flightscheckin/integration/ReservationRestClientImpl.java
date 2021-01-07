package com.ust.flightscheckin.integration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.ust.flightscheckin.integration.dto.Reservation;
import com.ust.flightscheckin.integration.dto.ReservationUpdateRequest;

@Component
public class ReservationRestClientImpl implements ReservationRestClient {

	@Value("${com.ust.flightscheckin.itinerary.api.url}")
	private String RESERVATION_REST_URL = "http://localhost:8080/flightreservation/reservations/";

	@Override
	public Reservation findReservation(Long id) {
		
		// TODO Auto-generated method stub
		RestTemplate restTemplate = new RestTemplate();
		Reservation reservation = restTemplate.getForObject(
				RESERVATION_REST_URL + id , 
				Reservation.class);
		
		return reservation;
	}

	@Override
	public Reservation updateReservation(ReservationUpdateRequest request) {
		// TODO Auto-generated method stub
		
		RestTemplate restTemplate = new RestTemplate();
		Reservation reservation = restTemplate.postForObject(
				RESERVATION_REST_URL, 
				request, 
				Reservation.class);
		
		return reservation;
	}

}
