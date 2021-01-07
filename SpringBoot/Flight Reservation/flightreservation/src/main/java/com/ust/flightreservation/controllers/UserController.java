package com.ust.flightreservation.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.itextpdf.text.pdf.qrcode.Encoder;
import com.ust.flightreservation.entities.Users;
import com.ust.flightreservation.repos.UserRepository;

@Controller
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	
	
	
	@RequestMapping("/showReg")
	public String showRegistrationPage() {
		
		LOGGER.info("Inside showRegistrationPage()");
		
		return "login/registerUser";
	}
	
	@RequestMapping(value = "/registerUser", method= RequestMethod.POST)
	public String register(@ModelAttribute("user") Users user) {
		LOGGER.info("Inside register()"+user.toString());
	
		userRepository.save(user);
		return "login/login";
	}
	
	@RequestMapping("/showLogin")
	public String showLoginPage() {
		LOGGER.info("Inside showLoginPage()");
		return "login/login";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(
			@RequestParam("email") String email, 
			@RequestParam("password") String password, 
			ModelMap modelMap) {
		
		
		Users user = userRepository.findByEmail(email);
		if(user.getPassword().equals(password)) {
			return "findFlights";
		} else {
			modelMap.addAttribute("msg", "Invalid user name or password. Please try again");
		}
		
		return "login/login";
	}
	
}









