package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.bean.Orders;
import com.service.OrdersService;
import com.service.PricewiseSortingService;

@RestController
@RequestMapping(value="orders")
@CrossOrigin
public class OrdersController {
	
	@Autowired
	OrdersService os;
	
	@GetMapping(value="displayOrders")
	public List<Orders> getOrders()
	{
		
		return os.getAllOrders();
	}
	@PostMapping(value="storeOrders" ,consumes=MediaType.APPLICATION_JSON_VALUE
			,produces=MediaType.TEXT_PLAIN_VALUE)
	public String storeOrders(@RequestBody Orders or)
	{
		return os.storeOrders(or);
	}
	
	@PutMapping(value = "updateOrders",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateOrders(@RequestBody Orders or) {
			return os.updateOrders(or);
	}
	
	@DeleteMapping(value = "deleteOrders/{oid}")
	public String deleteOrders(@PathVariable("oid") String oid) {
			return os.deleteOrders(oid);
	}
	@Autowired
	PricewiseSortingService sort;
	
	@GetMapping(value="pricedesc")
	public List<Orders> getOrdersDesc()
	{
		
		return sort.getAllOrdersDesc();
	}
	
	@GetMapping(value="priceasc")
	public List<Orders> getOrderssAsc()
	{
		
		return sort.getAllOrdersAsc();
	}
	@CrossOrigin
	@GetMapping(value="search/{keyword}")
	public List<Orders> getOrders(@PathVariable("keyword") String keyword)
	{
		
		return os.listAll(keyword);
	}

}
