import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  constructor(public httpClient:HttpClient) { }

  loadCategoryDetails():Observable<Category[]>
  {
    return this.httpClient.get<Category[]>("http://localhost:9090/category/display")
  }
  updateCategoriesInfo(categoryRef:any):Observable<string>{
    return this.httpClient.put("http://localhost:9090/category/update",categoryRef,{responseType:'text'})
    
  }
  deleteCategoryInfo(cId:any):Observable<string>{
    return this.httpClient.delete("http://localhost:9090/category/delete/"+cId,{responseType:'text'})
  }

  storeCategoryInfo(categoryRef:any):Observable<string>{
    //this.httpClient.post("http://localhost:9090/product/storeProductData",productRef).subscribe(result=>console.log(result))
    return this.httpClient.post("http://localhost:9090/category/store",categoryRef,{responseType:'text'})
  }
}
