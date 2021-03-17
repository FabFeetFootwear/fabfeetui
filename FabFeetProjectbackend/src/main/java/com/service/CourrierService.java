package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Courrier;
import com.dao.CourrierRepository;

@Service
public class CourrierService {
	
	@Autowired
	CourrierRepository cr;
	

	public List<Courrier> getAllCourrier() {
		return cr.findAll();
                                           }
	
	public String store(Courrier cu)
	{
		Optional<Courrier> pro=cr.findById(cu.getCoid());
		if(pro.isPresent())
		{
			return " Already present";
		}
		else {
			Courrier p=cr.save(cu);
			if(p!=null)
			{
				return "success";
			}
			else {
				return "fail";
			}
		}
	}
	
	
	public String update(Courrier pp) {
		Optional<Courrier> obj	 = cr.findById(pp.getCoid());
		if(obj.isPresent()) {
			Courrier p	 = obj.get();
			p.setDeliveryDate(pp.getDeliveryDate());
			p.setPrice(pp.getPrice());
			p.setAddress(pp.getAddress());
			cr.saveAndFlush(p);
			return "Record updated successfully";
		}else {
			return "Record not present";
		}
	}
	
	public String delete(String pid) {
		if(cr.existsById(pid)) {
			cr.deleteById(pid);
			return "Record deleted successfully";
		}else {
			return "Record not present";
		}
	}
	public List<Courrier> listAll(String keyword) {
		// TODO Auto-generated method stub
		if (keyword != null) {
            return cr.search(keyword);
        }
        return cr.findAll();
		
	}

}
