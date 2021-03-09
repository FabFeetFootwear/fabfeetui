package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Category;
import com.dao.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	CategoryRepository categoryRepository;
	
	public List<Category>getAllCategory(){
		return categoryRepository.findAll();
	}
	
	public String storeCategory(Category cc) {
		Optional<Category>op=categoryRepository.findById(cc.getCatid());
		if(op.isPresent()) {
			return "Record already present";
		}else {
			Category c=categoryRepository.save(cc);
			if(c!=null) {
				return "Record stored successfully";
			}else {
				return "Record didn't store";
			}
		}
	}
	
	public String deleteCategory(String catid) {
		if(categoryRepository.existsById(catid)){
			categoryRepository.deleteById(catid);
			return "Deleted the records";
		}else {
			return "didnot find";
		}
	}
	
	public String updateCategory(Category cc) {
		
		Optional<Category> obj=categoryRepository.findById(cc.getCatid());
		if(obj.isPresent()) {
			Category c=obj.get();
			c.setCategoryName(cc.getCategoryName());
		categoryRepository.saveAndFlush(c);
		return "updated";
	}else {
		return "not present";
	}
}
}
