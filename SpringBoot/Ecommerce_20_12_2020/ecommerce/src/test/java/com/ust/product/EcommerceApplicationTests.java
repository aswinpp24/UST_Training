package com.ust.product;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ust.product.entities.Product;
import com.ust.product.repos.ProductRepository;


@SpringBootTest
class EcommerceApplicationTests {

	@Autowired
	private ProductRepository productRepository;
	
	@Test
	public void testCreateStudent() {
		Product product = new Product();
		product.setTitle("Shirt");
		product.setPrice(2000d);
		product.setCategory("Clothing");
		product.setDescription("Men's Shirt");
		
		productRepository.save(product);
	}
	
	@Test
    public void testFindStudentById() {
		Product product = productRepository.findById(1).get();
		System.out.println(product);
	}
	
	@Test
    public void testUpdateStudent() {
		Product product = productRepository.findById(1).get();
		product.setPrice(3000d);
		System.out.println(product);
		productRepository.save(product);
	}
	
	@Test
    public void testDeleteStudent() {
		Product product = productRepository.findById(1).get();
		//student.setFee(40d);
		//System.out.println(student);
		productRepository.delete(product);
	}
}
