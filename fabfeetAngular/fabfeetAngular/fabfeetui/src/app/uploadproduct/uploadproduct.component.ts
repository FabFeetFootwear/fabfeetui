import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-uploadproduct',
  templateUrl: './uploadproduct.component.html',
  styleUrls: ['./uploadproduct.component.css']
})
export class UploadproductComponent implements OnInit {
  productInfo = new FormGroup({
    pid:new FormControl(),
    // catid:new FormControl(),
    // sid:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    status:new FormControl(),
    stock:new FormControl(),
    image:new FormControl()
    });
    msg:string="";  
  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
  }

  storeProductDetails() {
    
    let productRef = this.productInfo.value;
    this.productSer.storeProductInfo(productRef).subscribe(result=>this.msg=result);
  }

}
