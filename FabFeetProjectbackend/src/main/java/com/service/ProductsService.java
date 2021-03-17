package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Product;
import com.dao.ProductsRepository;

@Service
public class ProductsService {
	@Autowired
	ProductsRepository pre;

	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return pre.findAll();
	}

	public String storeProducts(Product pr) {
		// TODO Auto-generated method stub
		java.util.Optional<Product> obj=pre.findById(pr.getPid());
		if(obj.isPresent())
		{
			return "product is already present";
		}
		else {
			Product p=pre.save(pr);
			if(p!=null)
			{
				return "successfully stored";
			}
			else {
				return "didn't stored";
			}
		}
	}

	public String updateProducts(Product pr) {
		// TODO Auto-generated method stub
		java.util.Optional<Product> obj	 = pre.findById(pr.getPid());
		if(obj.isPresent())
		{
			Product p=obj.get();
			//p.setPname(pr.getPname());
			p.setStatus(pr.getStatus());
			p.setStock(pr.getStock());
			p.setPrice(pr.getPrice());
			//p.setImage(pr.getImage());
			pre.saveAndFlush(p);
			return "Record updated successfully";
		}
		else
		{
			return "id not found";
		}
	}

	public String deleteProducts(String pid) {
		// TODO Auto-generated method stub
		if(pre.existsById(pid))
		{
			pre.deleteById(pid);
			return "Record deleted successfully";
		}
		else
		{
			return "id not found";
		}
	}
	public List<Product> listAll(String keyword) {
        if (keyword != null) {
            return pre.search(keyword);
        }
        return pre.findAll();
    }

}
