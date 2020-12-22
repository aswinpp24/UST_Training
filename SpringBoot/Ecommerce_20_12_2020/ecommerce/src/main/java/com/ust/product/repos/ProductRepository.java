package com.ust.product.repos;

import org.springframework.data.repository.CrudRepository;

import com.ust.product.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
