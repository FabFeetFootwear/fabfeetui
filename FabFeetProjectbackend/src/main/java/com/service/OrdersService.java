package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.bean.Orders;
import com.dao.OrdersRepository;
@Service
public class OrdersService {
	@Autowired
	OrdersRepository ore;

	public List<Orders> getAllOrders() {
		// TODO Auto-generated method stub
		return ore.findAll();
	}

	public String storeOrders(Orders or) {
		// TODO Auto-generated method stub
		Optional<Orders> obj=ore.findById(or.getOid());
		if(obj.isPresent())
		{
			return "order is already present";
		}
		else {
			Orders o=ore.save(or);
			if(o!=null)
			{
				return "successfully stored";
			}
			else {
				return "didn't stored";
			}
		}
	}

	public String updateOrders(Orders or) {
		// TODO Auto-generated method stub
		Optional<Orders> obj	 = ore.findById(or.getOid());
		if(obj.isPresent())
		{
			Orders o=obj.get();
			o.setPrice(or.getPrice());
			o.setDeliveryStatus(or.getDeliveryStatus());
			o.setQuantity(or.getQuantity());
			o.setOrderDate(or.getOrderDate());
			ore.saveAndFlush(o);
			return "Record updated successfully";
		}
		else
		{
			return "id not found";
		}
	}

	public String deleteOrders(String oid) {
		// TODO Auto-generated method stub
		if(ore.existsById(oid))
		{
			ore.deleteById(oid);
			return "Record deleted successfully";
		}
		else
		{
			return "id not found";
		}
	}
	
	public List<Orders> listAll(String keyword) {
		// TODO Auto-generated method stub
		if (keyword != null) {
            return ore.search(keyword);
        }
        return ore.findAll();
		
	}

}
