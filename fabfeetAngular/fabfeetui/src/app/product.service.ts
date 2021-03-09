
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'      
})
export class ProductService {
abc:string="info";
  constructor(public httpClient:HttpClient) { }


 loadProductDetails(): Observable<Product[]>{
   return this.httpClient.get<Product[]>("http://localhost:9090/products/displayProducts");
 }



storeProductInfo(productRef:any):Observable<string>{

 return this.httpClient.post("http://localhost:9090/products/storeProducts",productRef,{responseType:'text'});
}

//put(url,updateJsonData,responseBody)

updateProductInfo(productRef:any ):Observable<string>{
  return this.httpClient.put("http://localhost:9090/products/updateProducts",productRef,{responseType:'text'});
}

//delete(url,responseBody)
deletProductInfo(pId:any):Observable<string>{
return this.httpClient.delete("http://localhost:9090/products/deleteProducts/"+pId,{responseType:'text'})
}

findProductById(pId:any):Observable<any>{
  return this.httpClient.get("http://localhost:9090/product/findProductById/"+pId);
}
}



