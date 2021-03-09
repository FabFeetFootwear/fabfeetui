package com.bean;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Courrier {
@Id
private String coid;
private String address,phone,cname;

@Column(name = "paymenttype")
private String paymentType;
private float price;
@Column(name = "deliverydate")
private LocalDate deliveryDate;
public String getCoid() {
	return coid;
}
public void setCoid(String coid) {
	this.coid = coid;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public String getPaymentType() {
	return paymentType;
}
public void setPaymentType(String paymentType) {
	this.paymentType = paymentType;
}
public String getCname() {
	return cname;
}
public void setCname(String cname) {
	this.cname = cname;
}
public float getPrice() {
	return price;
}
public void setPrice(float price) {
	this.price = price;
}
public LocalDate getDeliveryDate() {
	return deliveryDate;
}
public void setDeliveryDate(LocalDate deliveryDate) {
	this.deliveryDate = deliveryDate;
}





}
