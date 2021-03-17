import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {
  // pid:number=0;
  // msg:string=""
  // productRef= new Product();
  // flag:boolean = false;

  constructor(public prodSer:ProductService) { }

  ngOnInit(): void {
    // this.prodSer.findProductById(this.pid).subscribe(data=> {
    //   if(data==null){
        
    //     this.msg = "Record not found";
    //   this.flag= false;
    //   }else {
    //     this.msg = "";
    //     this.flag = true;
    //     this.productRef=data;        
    //   }
    // })
  }
  
  // callService() {
  //   //console.log("Event fired "+this.pid)
  //   this.prodSer.findProductById(this.pid).subscribe(data=> {
  //     if(data==null){
        
  //       this.msg = "Record not found";
  //     this.flag= false;
  //     }else {
  //       this.msg = "";
  //       this.flag = true;
  //       this.productRef=data;        
  //     }
  //   })
  // }
}
