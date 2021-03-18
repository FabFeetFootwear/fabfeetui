import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-delete-orders',
  templateUrl: './delete-orders.component.html',
  styleUrls: ['./delete-orders.component.css']
})
export class DeleteOrdersComponent implements OnInit {
  msg:string=""
  constructor(public ordersSer:OrdersService){}
  

  ngOnInit(): void {
  }
  deleteOrders(oid:any){
    this.ordersSer.deleteOrdersInfo(oid).subscribe(result=>this.msg=result)
  }
}
