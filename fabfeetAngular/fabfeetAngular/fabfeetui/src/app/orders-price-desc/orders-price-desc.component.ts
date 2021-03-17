import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-price-desc',
  templateUrl: './orders-price-desc.component.html',
  styleUrls: ['./orders-price-desc.component.css']
})
export class OrdersPriceDescComponent implements OnInit {
  orderInfo:Array<Orders>=[];
  flag:boolean=false;
  constructor(public orderSer:OrdersService) { }

  ngOnInit(): void {
    this.flag=true;
    this.orderSer.loadOrdersDetailsByDesc().subscribe(data=>this.orderInfo=data);
  }
  /*loadDataDescOrders(){
    //console.log(this.courrierInfo);
    this.flag=true;
    this.orderSer.loadOrdersDetailsByDesc().subscribe(data=>this.orderInfo=data);
    //console.log(data);
  }*/

}
