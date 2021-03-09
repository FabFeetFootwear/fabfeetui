import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Orders} from './orders.model'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public httpClient:HttpClient) { }

  loadOrderDetails(): Observable<Orders[]>{
    return this.httpClient.get<Orders[]>("http://localhost:9090/orders/displayOrders")
  }
  
  storeOrdersInfo(ordersRef:any):Observable<string>{
    return this.httpClient.post("http://localhost:9090/orders/storeOrders",ordersRef,{responseType:'text'})
  }

  updateOrdersInfo(ordersRef:any):Observable<string>{
    return this.httpClient.put("http://localhost:9090/orders/updateOrders",ordersRef,{responseType:'text'})
  }

  deleteOrdersInfo(oId:any):Observable<string>{
    return this.httpClient.delete("http://localhost:9090/orders/deleteOrders/"+oId,{responseType:'text'})
  }

  searchOrdersInfo(keyword:any):Observable<any>{
    return this.httpClient.get("http://localhost:9090/orders/search/"+keyword);
  }
}
