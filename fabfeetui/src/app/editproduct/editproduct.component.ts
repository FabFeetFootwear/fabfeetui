import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  msg:string="";
  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
  }

  updateProductInfo(productInfo:any){
    //console.log(productInfo)
    this.productSer.updateProductInfo(productInfo).subscribe(data=>this.msg=data);
  }

}
