package com.ust.flightreservation.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.ust.flightreservation.dto.ReservationRequest;
import com.ust.flightreservation.entities.Flight;
import com.ust.flightreservation.entities.Reservation;
import com.ust.flightreservation.repos.FlightRepository;
import com.ust.flightreservation.services.ReservationService;

@Controller
public class ReservationController {
	
	@Autowired
	FlightRepository flightRepository;
	
	@Autowired
	ReservationService reservationService;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	
	@RequestMapping("/showCompleteReservation")
	public String showCompleteReservation(
			@RequestParam("flightId") Long flightId,
			ModelMap modelMap
			) {
		LOGGER.info("Inside showCompleteReservation()");
		Flight flight = flightRepository.findById(flightId).get();
		modelMap.addAttribute("flight", flight);
		return "completeReservation";
	}
	
	@RequestMapping(value = "/completeReservation", method = RequestMethod.POST)
	public String completeReservation(
			ReservationRequest request,
			ModelMap modelMap
			) {
		LOGGER.info("Inside completeReservation()");
		Reservation reservation = reservationService.bookFlight(request);
		
		modelMap.addAttribute("msg", "Reservation Created Successfully and the id is" + reservation.getId());
		
		return "reservationConfirmation";
	}

}
