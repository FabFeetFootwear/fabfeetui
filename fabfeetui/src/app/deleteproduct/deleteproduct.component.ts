import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(public productSer:ProductService) { }
  msg:string="";
  ngOnInit(): void {
  }
 
  deleteProduct(pid:any){
    //console.log(pid);
    this.productSer.deletProductInfo(pid).subscribe(result=>this.msg=result);
  }
}
