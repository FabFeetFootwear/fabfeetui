package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.GenericsService;

@RestController
@RequestMapping(value="joins")
@CrossOrigin
public class GenericsController {
	@Autowired
	GenericsService joinservice;
	
	@GetMapping(value = "CategoryProduct/{id}")
	public ResponseEntity<List<Object[]>> getCategoryProductDetails(@PathVariable("id") String id){
					List<Object[]> details = joinservice.CategoryProductDetails(id);
					return ResponseEntity.status(200).body(details);
	}
	
	@GetMapping(value = "CourrierOrder/{id}")
	public ResponseEntity<List<Object[]>> getCourrierOrdersDetails(@PathVariable("id") String id){
					List<Object[]> details = joinservice.CourrierOrderDetails(id);
					return ResponseEntity.status(200).body(details);
	}
	
	@GetMapping(value = "CustomerOrder/{id}")
	public ResponseEntity<List<Object[]>> getCustomerOrdersDetails(@PathVariable("id") String id){
					List<Object[]> details = joinservice.CustomerOrdersDetails(id);
					return ResponseEntity.status(200).body(details);
	}
	
	@GetMapping(value = "ProductOrder/{id}")
	public ResponseEntity<List<Object[]>> getProductOrdersDetails(@PathVariable("id") String id){
					List<Object[]> details = joinservice.ProductOrdersDetails(id);
					return ResponseEntity.status(200).body(details);
	}

	
	@GetMapping(value = "SupplierProduct/{id}")
	public ResponseEntity<List<Object[]>> getSupplierProductDetails(@PathVariable("id") String id){
					List<Object[]> details = joinservice.SupplierProductDetails(id);
					return ResponseEntity.status(200).body(details);
	}
}
