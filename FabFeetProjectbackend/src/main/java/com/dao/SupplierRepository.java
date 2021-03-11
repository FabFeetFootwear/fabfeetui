package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bean.Supplier;
@Repository
public interface SupplierRepository extends JpaRepository<Supplier,String>{

}
