import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public httpClient:HttpClient) { }
  checkLogin(customer:any):Observable<Customer>{
    return this.httpClient.post<Customer>("http://localhost:9090/customer/loginCustomer",customer)
  }

  storeCustomersInfo(custRef:any):Observable<string>{
    return this.httpClient.post("http://localhost:9090/customer/store",custRef,{responseType:'text'})
  }
  
  updateCustomersInfo(custRef:any):Observable<string>{
    return this.httpClient.put("http://localhost:9090/customer/update",custRef,{responseType:'text'})
  }

  loadCustomerDetails():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>("http://localhost:9090/customer/display")
  
  }
}
