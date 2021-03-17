package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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

//import com.bean.Customer;
import com.bean.Supplier;
import com.service.SupplierService;

@RestController
@RequestMapping(value="supplier")
@CrossOrigin
public class SupplierController {
	
	@Autowired
	SupplierService supplierService;
	
	@GetMapping(value="display",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Supplier>getAllSupplier(){
		return supplierService.getAllSupplier();
	}
	@PostMapping(value="store",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String  storeSupplier(@RequestBody Supplier ss) {
		return supplierService.storeSupplier(ss);
	}
	@PutMapping(value="update",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String  updateSupplier(@RequestBody Supplier ss) {
		return supplierService.updateSupplier(ss);
	}
	
	@DeleteMapping(value="delete/{sid}")
	public String deleteSupplier(@PathVariable("sid") String sid) {
		return supplierService.deleteSupplier(sid);
	}
	
	@PostMapping(value="loginSupplier",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public Supplier loginSupplier(@RequestBody Supplier s,HttpServletRequest request) {
		Supplier sup= supplierService.loginSupplier(s);
		;
		if(sup==null) {
			return null;		
		}
		else {
			//supplierService.checkProductStatusSupplier(sup.getSid());
			HttpSession session=request.getSession();  
			session.setAttribute("sid", sup.getSid());
			session.setAttribute("username", sup.getUsername());
			return sup;
			
		}
	}

}
