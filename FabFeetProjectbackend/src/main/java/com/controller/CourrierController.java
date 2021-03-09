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

import com.bean.Courrier;
import com.service.CourrierService;
import com.service.PricewiseSortingService;

@RestController
@RequestMapping(value="courrier")
@CrossOrigin
public class CourrierController {

	@Autowired
	CourrierService cs;
	
	@GetMapping(value="display")
	public List<Courrier> getCourrierList()
	{
		
		return cs.getAllCourrier();
	}
	
	@PostMapping(value="store" ,consumes=MediaType.APPLICATION_JSON_VALUE
			,produces=MediaType.TEXT_PLAIN_VALUE)
	public String store(@RequestBody Courrier cu)
	{
		return cs.store(cu);
	}
	
	@PutMapping(value = "update",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String update(@RequestBody Courrier cu) {
			return cs.update(cu);
	}
	
	@DeleteMapping(value = "delete/{pid}")
	public String delete(@PathVariable("pid") String coid) {
			return cs.delete(coid);
	}
	
	@Autowired
	PricewiseSortingService sort;
	
	@GetMapping(value="pricedesc")
	public List<Courrier> getCourrierDesc()
	{
		
		return sort.getAllCourrierDesc();
	}
	@GetMapping(value="priceasc")
	public List<Courrier> getCourrierAsc()
	{
		
		return sort.getAllCourrierAsc();
	}
	@GetMapping(value="search/{keyword}")
	public List<Courrier> getCourrier(@PathVariable("keyword") String keyword)
	{
		
		return cs.listAll(keyword);
	}


}

