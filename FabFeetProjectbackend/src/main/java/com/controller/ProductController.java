package com.controller;
import org.springframework.http.MediaType;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Product;
import com.service.ProductsService;
import com.service.PricewiseSortingService;




@RestController
@RequestMapping(value="products")
@CrossOrigin
public class ProductController {
 
	@Autowired
	ProductsService ps;
	
	@GetMapping(value="displayProducts")
	public List<Product> getProducts()
	{
		
		return ps.getAllProducts();
	}
	@PostMapping(value="storeProducts" ,consumes=MediaType.APPLICATION_JSON_VALUE
			,produces=MediaType.TEXT_PLAIN_VALUE)
	public String storeProducts(@RequestBody Product or)
	{
		return ps.storeProducts(or);
	}
	
	@PutMapping(value = "updateProducts",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateOrders(@RequestBody Product or) {
			return ps.updateProducts(or);
	}
	
	@DeleteMapping(value = "deleteProducts/{pid}")
	public String deleteProducts(@PathVariable("pid") String pid) {
			return ps.deleteProducts(pid);
	}
	@GetMapping(value="search/{keyword}")
	public List<Product> getProducts(@PathVariable("keyword") String keyword)
	{
		
		return ps.listAll(keyword);
	}
	@Autowired
	PricewiseSortingService sort;
	@GetMapping(value="pricedesc")
	public List<Product> getProductsDesc()
	{
		
		return sort.getAllProductDesc();
	}
	
	@GetMapping(value="priceasc")
	public List<Product> getProductsAsc()
	{
		
		return sort.getAllProductAsc();
	}
 
}
