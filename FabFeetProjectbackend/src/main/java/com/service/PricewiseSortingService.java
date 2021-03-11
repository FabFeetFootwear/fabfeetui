package com.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Category;
import com.bean.Courrier;
import com.bean.Orders;
import com.bean.Product;
import com.bean.Supplier;
import com.dao.PricewiseSortingDao;

@Service
public class PricewiseSortingService {

	@Autowired
	PricewiseSortingDao sort;
	
	public List<Product> getAllProductDesc() {
		return sort.getAllProductDesc();
}
	
	public List<Product> getAllProductAsc() {
		return sort.getAllProductAsc();
}
	
	public List<Orders> getAllOrdersDesc(){
		return sort.getAllOrdersDesc();
	}
	
	public List<Orders> getAllOrdersAsc(){
		return sort.getAllOrdersAsc();
	}
	
	public List<Courrier> getAllCourrierDesc(){
		return sort.getAllCourrierDesc();
	}
	
	public List<Courrier> getAllCourrierAsc(){
		return sort.getAllCourrierAsc();
	}

}
