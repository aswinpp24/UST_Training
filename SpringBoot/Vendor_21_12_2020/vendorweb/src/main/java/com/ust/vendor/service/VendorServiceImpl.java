package com.ust.vendor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.vendor.entities.Vendor;
import com.ust.vendor.repos.VendorRepository;

@Service
public class VendorServiceImpl implements VendorService {

	@Autowired
	private VendorRepository respository;
	
	@Override
	public Vendor saveVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		return respository.save(vendor);
	}

	@Override
	public Vendor updateVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		return respository.save(vendor);
	}

	@Override
	public void deleteVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		respository.delete(vendor);
	}

	@Override
	public Vendor getVendorById(int id) {
		// TODO Auto-generated method stub
		return respository.findById(id).get();
	}

	@Override
	public List<Vendor> getAllVendors() {
		// TODO Auto-generated method stub
		return (List<Vendor>) respository.findAll();
	}
	
	public VendorRepository getRespository() {
		return respository;
	}

}
