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


  checkUser(userRef:any) {
    //console.log(userRef)
    let user = userRef.user;
    let pass  = userRef.pass;

    //if(user=="Raj" && pass=="123"){

    this.customer.username=user;
    this.customer.password=pass;
    this.customerService.checkLogin(this.customer).subscribe(obj=>{
      if(obj==null){
        this.msg = "UserName or password is Invalid!!";
      }else{
        console.log(obj)
        this.customer1=obj
        sessionStorage.setItem("customer",JSON.stringify(obj));
        this.router.navigate(['']);
      }
    })
    /*if(user=="Raj" && pass=="123"){

      console.log("Successfully Login")
      this.router.navigate(["home"])
    }else {
      console.log("Failure try once again")
      this.msg = "UserName or password is wrong";
    }
  }


  this.userSer.checkUserService(userRef).subscribe(data=> {
    //let user = data.user;
    //let pass = data.pass;
  if(data=="Success"){
      console.log("Successfully Login")
      sessionStorage.setItem("user",userRef.user);
      this.router.navigate(["home"])
    }else {
      console.log("Failure try once again")
      this.msg = "UserName or password is wrong";
    }
  },error=>console.log(error))

  */


    }

  }