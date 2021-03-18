import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import {Supplier} from '../supplier.model'
@Component({
  selector: 'app-supplierretrieve',
  templateUrl: './supplierretrieve.component.html',
  styleUrls: ['./supplierretrieve.component.css']
})
export class SupplierretrieveComponent implements OnInit {

  supplierinfo:Array<Supplier>=[];
  flag:boolean=false
  constructor(public supplierservice:SupplierService) { }
  ngOnInit(): void {

    
    this.flag=true
this.supplierservice.loadSupplierDetails().subscribe(data=>this.supplierinfo=data);
  }
  // loaddata()
  // {
  // }

}
