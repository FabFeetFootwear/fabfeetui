package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bean.Courrier;

@Repository
public interface CourrierRepository extends JpaRepository<Courrier,String> {
	@Query("SELECT c FROM Courrier c WHERE c.coid LIKE %?1%")
	   public List<Courrier> search(String keyword);

}