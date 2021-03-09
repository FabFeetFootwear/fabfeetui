import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courrier } from './courrier.module';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  constructor(public httpClient:HttpClient) { }
 loadCourrierDetails():Observable<Courrier[]>{
   return this.httpClient.get<Courrier[]>("http://localhost:9090/courrier/display")
 }
 storeCourrierInfo(courrierRef:any):Observable<string>{
   return this.httpClient.post("http://localhost:9090/courrier/store",courrierRef,{responseType:"text"})
 }
 updateCourrierInfo(courrierRef:any):Observable<string>{
  return this.httpClient.put("http://localhost:9090/courrier/update",courrierRef,{responseType:"text"})
}
deleteCourrierInfo(coId:any):Observable<string>{
   return this.httpClient.delete("http://localhost:9090/courrier/delete/"+coId,{responseType:"text"})
 }
loadCourrierDetailsByAsc():Observable<Courrier[]>{
  return this.httpClient.get<Courrier[]>("http://localhost:9090/courrier/priceasc")
}
loadCourrierDetailsByDesc():Observable<Courrier[]>{
  return this.httpClient.get<Courrier[]>("http://localhost:9090/courrier/pricedesc")
}

}