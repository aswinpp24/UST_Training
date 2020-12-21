package com.ust.vendor.controllers;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


import com.ust.vendor.entities.Vendor;
import com.ust.vendor.repos.VendorRepository;
import com.ust.vendor.service.VendorService;
import com.ust.vendor.util.EmailUtil;
import com.ust.vendor.util.ReportUtil;

@Controller
public class VendorController {

	@Autowired
	VendorService service;
	
	@Autowired
	VendorRepository repository;
	
	@Autowired
	EmailUtil emailUtil;
	
	@Autowired
	ReportUtil reportUtil;
	
	@Autowired
	ServletContext sc;
	
	@RequestMapping("/showVendor")
	public String showCreate() {
		return "createVendor";
	}
	
	@RequestMapping("/saveVendor")
	public String saveVendor(@ModelAttribute("vendor") Vendor vendor, ModelMap modelMap) {
		Vendor vendorSaved = service.saveVendor(vendor);
		String msg = "Vendor successfullly saved with Id: " + vendorSaved.getId();
		modelMap.addAttribute("msg", msg);
		emailUtil.sendEmail("aswinust123@gmail.com", "Vendor Saved", "Vendor saved successfully!!!!!!");
		return "createVendor"; 
	}
	
	@RequestMapping("/displayVendors")
	public String displayLocations(ModelMap modelMap) {
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors", vendors);
		return "displayVendors";
	}
	
	@RequestMapping("/deleteVendor")
	public String deleteVendor(@RequestParam("id") int id, ModelMap modelMap ) {
		//Location location = service.getLocationById(id);
		Vendor vendor = new Vendor();
		vendor.setId(id);
		service.deleteVendor(vendor);
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors", vendors);
		return "displayVendors";
	}
	
	@RequestMapping("/showUpdate")
	public String showUpdate(@RequestParam("id") int id, ModelMap modelMap ) {
		Vendor vendor = service.getVendorById(id);
		modelMap.addAttribute("vendor", vendor);
		return "updateVendor";
	}
	
	@RequestMapping("/updateVendor")
	public String updateLocation(@ModelAttribute("vendor") Vendor vendor, ModelMap modelMap ) {
		service.updateVendor(vendor);
		
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors", vendors);
		
		return "displayVendors";
	}
	
	@RequestMapping("/generateReport")
	public String generateReport() {
		String path = sc.getRealPath("/");
		List<Object[]> data = repository.findTypeAndTypeCount();
		reportUtil.generatePieChart(path , data);
		return "report";
	}
	
}
