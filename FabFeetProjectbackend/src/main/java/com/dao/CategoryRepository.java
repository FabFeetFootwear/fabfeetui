package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bean.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category,String>{

}
