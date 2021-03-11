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

import com.bean.Customer;
import com.service.CustomerService;

@RestController
@RequestMapping(value="customer")
@CrossOrigin
public class CustomerController {

	@Autowired
	CustomerService cs;
	
	@GetMapping(value="display")
	public List<Customer> getProducts()
	{
		
		return cs.getAllCustomer();
	}
	
	@PostMapping(value="store" ,consumes=MediaType.APPLICATION_JSON_VALUE
			,produces=MediaType.TEXT_PLAIN_VALUE)
public String storeusingrepo(@RequestBody Customer cu)
{
	return cs.store(cu);
}
	
	@PutMapping(value = "update",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateProductSpringData(@RequestBody Customer cu) {
			return cs.update(cu);
	}
	
	@DeleteMapping(value = "delete/{pid}")
	public String deleteProductSpringData(@PathVariable("pid") String pid) {
			return cs.delete(pid);
	}
	
	@PostMapping(value="loginCustomer",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer loginCustomer(@RequestBody Customer c,HttpServletRequest request) {
		Customer cust= cs.loginCustomer(c);
		;
		if(cust==null) {
			return null;		
		}
		else {
			cs.checkOrdersStatusCustomer(cust.getCid());
			HttpSession session=request.getSession();  
			session.setAttribute("cid", cust.getCid());
			session.setAttribute("username", cust.getUsername());
			return cust;
			
		}
	}

}
