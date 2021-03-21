import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Customer } from '../customer.model';
import { CustomerService} from '../customer.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
    msg:string=""
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
  }
  storeCustomersDetails(customer:Customer){
    // let custRef=this.customersInfo.value
    // console.log(custRef)
    
    this.customerService.storeCustomersInfo(customer).subscribe(result=>this.msg=result)
  }

}
