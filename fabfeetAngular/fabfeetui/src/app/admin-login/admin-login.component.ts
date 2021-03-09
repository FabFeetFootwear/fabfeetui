import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  msg:string=""
  supplier = new Supplier();
  supplier1 =new Supplier();
  constructor(public router:Router,public supplierService:SupplierService) { }

  ngOnInit(): void {
  }
  checkAdmin(adminRef:any) {
    //console.log(userRef)
    let user = adminRef.user;
    let pass  = adminRef.pass;
    this.supplier.username=user;
    this.supplier.password=pass;
    this.supplierService.checkLogin(this.supplier).subscribe(obj=>{
      if(obj==null){
        this.msg = "UserName or password is Invalid!!";
      }else{
        console.log(obj)
        this.supplier1=obj
        sessionStorage.setItem("supplier",JSON.stringify(obj));
        this.router.navigate(['home']);
      }
    })
}
}