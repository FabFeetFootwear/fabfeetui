import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Supplier} from './supplier.model';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(public httpClient:HttpClient) { }

  checkLogin(supplier:any):Observable<Supplier>{
    return this.httpClient.post<Supplier>("http://localhost:9090/supplier/loginSupplier",supplier)
  }

  loadSupplierDetails(): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>("http://localhost:9090/supplier/display")
  }
  updateSuppliersInfo(supplierRef:any):Observable<string>{
    return this.httpClient.put("http://localhost:9090/supplier/update",supplierRef,{responseType:'text'})
    
  }
  deleteSupplierInfo(sId:any):Observable<string>{
    return this.httpClient.delete("http://localhost:9090/supplier/delete/"+sId,{responseType:'text'})
  }
  storeSupplierInfo(supplierRef:any):Observable<string>{
    //this.httpClient.post("http://localhost:9090/product/storeProductData",productRef).subscribe(result=>console.log(result))
    return this.httpClient.post("http://localhost:9090/supplier/store",supplierRef,{responseType:'text'})
  }
}
