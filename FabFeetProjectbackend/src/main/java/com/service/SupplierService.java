package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.bean.Supplier;

import com.dao.SupplierRepository;
@Service
public class SupplierService {
	
	@Autowired
	SupplierRepository supplierRepository;
	
	public List<Supplier>getAllSupplier(){
		return supplierRepository.findAll();
	}
	
	public String storeSupplier(Supplier ss) {
		Optional<Supplier>op=supplierRepository.findById(ss.getSid());
		if(op.isPresent()) {
			return "Record already present";
		}else {
			Supplier s=supplierRepository.save(ss);
			if(s!=null) {
				return "Record stored successfully";
			}else {
				return "Record didn't store";
			}
		}
	}
	
	public String deleteSupplier(String sid) {
		if(supplierRepository.existsById(sid)){
			supplierRepository.deleteById(sid);
			return "Deleted the records";
		}else {
			return "didnot find";
		}
	}
	
	public String updateSupplier(Supplier ss) {
		
		Optional<Supplier> obj=supplierRepository.findById(ss.getSid());
		if(obj.isPresent()) {
			Supplier s=obj.get();
			s.setPassword(ss.getPassword());
		supplierRepository.saveAndFlush(s);
		return "updated";
	}else {
		return "not present";
	}
}
	

	public Supplier loginSupplier(Supplier s) {
		List<Supplier> listOfSup = supplierRepository.findAll();
		Supplier sup1=null;
		int flag=0;
		for(Supplier sup:listOfSup) {
			if((sup.getUsername().equals(s.getUsername()))&& (sup.getPassword().equals(s.getPassword()))) {
				sup1=sup;
			}
		}
		return sup1;
		
	}
}
