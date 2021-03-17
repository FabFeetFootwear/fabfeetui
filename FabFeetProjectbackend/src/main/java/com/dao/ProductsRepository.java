package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bean.Product;


@Repository
public interface ProductsRepository extends JpaRepository<Product,String>{

	@Query("SELECT p FROM Product p WHERE p.pname LIKE %?1%"
            + " OR CONCAT(p.price, '') LIKE %?1%")
   public List<Product> search(String keyword);
	
	
}
