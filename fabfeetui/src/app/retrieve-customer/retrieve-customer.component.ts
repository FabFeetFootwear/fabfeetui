import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-retrieve-customer',
  templateUrl: './retrieve-customer.component.html',
  styleUrls: ['./retrieve-customer.component.css']
})
export class RetrieveCustomerComponent implements OnInit {
  customerInfo:Array<Customer>=[];
  flag:boolean = false;
  constructor(public customerSer:CustomerService) { }

  ngOnInit(): void {
    this.flag=true;
    this.customerSer.loadCustomerDetails().subscribe(data=>this.customerInfo=data);
  }
  /*loadData(){
    this.flag=true;
    this.customerSer.loadCustomerDetails().subscribe(data=>this.customerInfo=data);
  }*/

}
