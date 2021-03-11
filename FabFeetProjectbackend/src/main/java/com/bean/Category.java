package com.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value="categoryswagger")
@Entity
@Table(name="category")
public class Category {
	@ApiModelProperty(value="catid swagger")
	@Id
	private String catid;
	@Column(name="categoryname")
	private String categoryName;
	public String getCatid() {
		return catid;
	}
	public void setCatid(String catid) {
		this.catid = catid;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	@Override
	public String toString() {
		return "Category [catid=" + catid + ", categoryName=" + categoryName + "]";
	}
	
}
