import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplierstore',
  templateUrl: './supplierstore.component.html',
  styleUrls: ['./supplierstore.component.css']
})
export class SupplierstoreComponent implements OnInit {

  supplierInfo=new FormGroup({
    sid:new FormControl(),
    sname:new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
  })
  msg:string=""
    constructor(public supplierSer:SupplierService) { }

  ngOnInit(): void {
  }
  storeSupplierDetails(){
    let supplierRef=this.supplierInfo.value
    this.supplierSer.storeSupplierInfo(supplierRef).subscribe(result=>this.msg=result)
    //console.log(this.productInfo.value)
  }

}