import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplierupdate',
  templateUrl: './supplierupdate.component.html',
  styleUrls: ['./supplierupdate.component.css']
})
export class SupplierupdateComponent implements OnInit {

  msg:string=""
  constructor(public supplierSer:SupplierService) { }

  ngOnInit(): void {
  }
  updateSupplierInfo(supplierInfo:any){
    this.supplierSer.updateSuppliersInfo(supplierInfo).subscribe(data=>this.msg=data)
  }

}
