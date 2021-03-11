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

import com.bean.Category;
import com.service.CategoryService;



@RestController
@RequestMapping(value="category")
@CrossOrigin
public class CategoryController {
	@Autowired
	CategoryService categoryService;
	
	@GetMapping(value="display",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Category>getAllCategory(){
		return categoryService.getAllCategory();
	}
	@PostMapping(value="store",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String  storeCategory(@RequestBody Category cc) {
		return categoryService.storeCategory(cc);
	}
	@PutMapping(value="update",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String  updateCategory(@RequestBody Category cc) {
		return categoryService.updateCategory(cc);
	}
	
	@DeleteMapping(value="delete/{catid}")
	public String deleteCategory(@PathVariable("catid") String catid) {
		return categoryService.deleteCategory(catid);
	}
}
