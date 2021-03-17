import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-price-asc',
  templateUrl: './orders-price-asc.component.html',
  styleUrls: ['./orders-price-asc.component.css']
})
export class OrdersPriceAscComponent implements OnInit {
  orderInfo:Array<Orders>=[];
  flag:boolean=false;
  constructor(public orderSer:OrdersService) { }
  
  ngOnInit(): void {
    this.flag=true;
    this.orderSer.loadOrdersDetailsByAsc().subscribe(data=>this.orderInfo=data);
  }
  /*loadDataAscOrders(){
    //console.log(this.courrierInfo);
    this.flag=true;
    this.orderSer.loadOrdersDetailsByAsc().subscribe(data=>this.orderInfo=data);
    //console.log(data);
  }*/

}
