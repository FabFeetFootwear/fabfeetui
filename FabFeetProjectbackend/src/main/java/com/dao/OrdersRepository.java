package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bean.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders,String>{
	@Query("SELECT o FROM Orders o WHERE o.oid LIKE %?1%")
	   public List<Orders> search(String keyword);
}
