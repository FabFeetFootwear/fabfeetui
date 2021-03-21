import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplierdelete',
  templateUrl: './supplierdelete.component.html',
  styleUrls: ['./supplierdelete.component.css']
})
export class SupplierdeleteComponent implements OnInit {

  msg:string=""
  constructor(public supplierSer:SupplierService){}
  

  ngOnInit(): void {
  }
  deleteSupplier(sid:any){
    this.supplierSer.deleteSupplierInfo(sid).subscribe(result=>this.msg=result)
  }

}
