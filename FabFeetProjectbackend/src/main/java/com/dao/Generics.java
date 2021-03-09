package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class Generics {
	@Autowired
	EntityManagerFactory factory;

	public List<Object[]> CategoryProductDetails(String id) {
						EntityManager manager  = factory.createEntityManager();
						Query qry =
	manager.createNativeQuery("select c1.categoryName,p1.pname,p1.stock,p1.status,p1.price  from category c1,product p1 where c1.catid=p1.catid and c1.catid= :catId");
						
						qry.setParameter("catId", id);
						List<Object[]> list = qry.getResultList();
						return list;
	}
	
	public List<Object[]> CourrierOrdersDetails(String id) {
		EntityManager manager  = factory.createEntityManager();
		Query qry =
manager.createNativeQuery(" select c.address,c.cname,c.phone,c.paymenttype,o.oid,o.deliveryStatus,o.quantity,o.orderDate,o.price from courrier c,orders o where c.coid=o.coid and c.coid=:co");
		
		qry.setParameter("co", id);
		List<Object[]> list = qry.getResultList();
		return list;
}
	
	public List<Object[]> getCustomerOrders(String id) {
		EntityManager manager = factory.createEntityManager();
		Query qry =manager.createNativeQuery("select c.cname,c.phone,c.address,c.email,o.oid,o.deliveryStatus,o.quantity,o.orderDate,o.price from customer c,orders o where c.cid=o.cid and o.cid=:custid");
		qry.setParameter("custid", id);
		List<Object[]> list = qry.getResultList();
		return list;
		}
	
	public List<Object[]> getProductsOrders(String id) {
		EntityManager manager  = factory.createEntityManager();
		Query qry =manager.createNativeQuery("select p.pid,p.pname,o.oid,o.deliveryStatus,o.quantity,o.orderDate,o.price from product p,orders o where p.pid=o.pid and o.oid =:odrid");
		
		qry.setParameter("odrid", id);
		List<Object[]> list = qry.getResultList();
		return list;
}
	
	public List<Object[]> getSupplierProduct(String id) {
		EntityManager manager  = factory.createEntityManager();
		Query qry =manager.createNativeQuery("select s.sname,s.phone,p.pid,p.pname,p.stock,p.price from supplier s, product p where s.sid=p.sid and p.sid =:supid");
		
		qry.setParameter("supid", id);
		List<Object[]> list = qry.getResultList();
		return list;
}

	
}
