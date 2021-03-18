import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string=""

  //constructor(public router:Router) { }   //DI for Router which help to do routing programmatially

  customer = new Customer();
  customer1 =new Customer();
  constructor(public router:Router,public customerService:CustomerService) { }   //DI for Router which help to do routing programmatially


  ngOnInit(): void {
  }


  verify(userRef:any) {
    
    let user = userRef.user;
    let pass  = userRef.pass;

   

    this.customer.username=user;
    this.customer.password=pass;
    this.customerService.checkLogin(this.customer).subscribe(obj=>{
      if(obj==null){
        this.msg = "UserName or password is Invalid!!";
      }else{
        console.log(obj)
        this.customer1=obj
        sessionStorage.setItem("customer",JSON.stringify(obj));
        this.router.navigate(['dashboard']);
      }
    })



    }

  }