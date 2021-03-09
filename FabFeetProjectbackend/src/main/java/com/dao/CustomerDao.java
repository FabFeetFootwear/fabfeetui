package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Orders;
@Repository
public class CustomerDao {
	@Autowired
	EntityManagerFactory emf;
	
	@Autowired
	CustomerRepository cr;
	
	public void checkOrdersStatusCustomer(String cid) {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select o from Orders o where o.cid=?1");
		qry.setParameter(1, cid);
		List<Orders> list=qry.getResultList();
		
		
		
	}

}
