import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { CustomerService} from '../customer.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }


  
    customersInfo =new FormGroup({
      cid:new FormControl(),
      cname:new  FormControl(),
      username:new FormControl(),
      password: new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      address: new FormControl()
      
    })
    msg:string=""
  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
  }
  storeCustomersDetails(){
    let custRef=this.customersInfo.value
    console.log(custRef)
    this.customerService.storeCustomersInfo(custRef).subscribe(result=>this.msg=result)
  }

}
