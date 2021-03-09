import { Component, OnInit } from '@angular/core';



import { CustomerService} from '../customer.service'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {


  // constructor() { }

  // ngOnInit(): void {
  // }


  msg:string=""
  constructor(public custSer:CustomerService) { }

  ngOnInit(): void {
  }
  updateCustomersInfo(CustomerInfo:any){
    this.custSer.updateCustomersInfo(CustomerInfo).subscribe(data=>this.msg=data)
  }

}
