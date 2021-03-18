import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-update-orders',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.css']
})
export class UpdateOrdersComponent implements OnInit {
  msg:string=""
  constructor(public ordersSer:OrdersService) { }

  ngOnInit(): void {
  }
  updateOrdersInfo(ordersInfo:any){
    this.ordersSer.updateOrdersInfo(ordersInfo).subscribe(data=>this.msg=data)
  }
}
