package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.dao.CustomerDao;
import com.dao.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository cr;
	
	@Autowired
	CustomerDao cd;
	
	
	public List<Customer> getAllCustomer() {
		return cr.findAll();
                                           }
	
	public String store(Customer cu)
	{
		Optional<Customer> pro=cr.findById(cu.getCid());
		if(pro.isPresent())
		{
			return "customer is already present";
		}
		else {
			Customer p=cr.save(cu);
			if(p!=null)
			{
				return "success";
			}
			else {
				return "fail";
			}
		}
	}
	
	
	public String update(Customer pp) {
		Optional<Customer> obj	 = cr.findById(pp.getCid());
		if(obj.isPresent()) {
			Customer p	 = obj.get();
			p.setPassword(pp.getPassword());
			//p.setPhone(pp.getPhone());
			//p.setAddress(pp.getAddress());
		cr.saveAndFlush(p);
		return "Password updated successfully";
}else {
	return "UserId didn't match!! Check Your UserId";
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
	public Customer loginCustomer(Customer c) {
		List<Customer> listOfCust = cr.findAll();
		Customer cust1=null;
		int flag=0;
		for(Customer cust:listOfCust) {
			if((cust.getUsername().equals(c.getUsername()))&& (cust.getPassword().equals(c.getPassword()))) {
				cust1=cust;
			}
		}
		return cust1;
		
	}
	public void checkOrdersStatusCustomer(String cid) {
		cd.checkOrdersStatusCustomer(cid);
		
	}
}
