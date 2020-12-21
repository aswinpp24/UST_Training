package com.ust.vendor.repos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ust.vendor.entities.Vendor;

public interface VendorRepository extends CrudRepository<Vendor ,Integer> {
	
	@Query("select type,count(type) from Vendor group by type")
	public List<Object[]> findTypeAndTypeCount();

}
