import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-store-orders',
  templateUrl: './store-orders.component.html',
  styleUrls: ['./store-orders.component.css']
})
export class StoreOrdersComponent implements OnInit {
  ordersInfo =new FormGroup({
    cid:new FormControl(),
    pid:new  FormControl(),
    coid:new FormControl(),
    oid: new FormControl(),
    deliveryStatus:new FormControl(),
    quantity:new FormControl(),
    orderDate: new FormControl(),
    price :new FormControl()
  })
  msg:string=""
  constructor(public ordersSer:OrdersService) { }

  ngOnInit(): void {
  }
  storeOrdersDetails(){
    let ordersRef=this.ordersInfo.value
    console.log(ordersRef)
    this.ordersSer.storeOrdersInfo(ordersRef).subscribe(result=>this.msg=result)
  }
}
