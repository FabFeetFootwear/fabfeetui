package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.dao.Generics;

@Service
public class GenericsService {

	@Autowired
	Generics joins;
	
	public List<Object[]> CategoryProductDetails(String id) {
		return joins.CategoryProductDetails(id);
	}
	
	public List<Object[]> CourrierOrderDetails(String id) {
		return joins.CourrierOrdersDetails(id);
	}
	
	public List<Object[]> CustomerOrdersDetails(String id) {
		return joins.getCustomerOrders(id);
	}
	
	public List<Object[]> ProductOrdersDetails(String id) {
		return joins.getProductsOrders(id);
	}
	
	public List<Object[]> SupplierProductDetails(String id) {
		return joins.getSupplierProduct(id);
	}
}
