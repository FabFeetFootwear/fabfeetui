import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-retrieve-orders',
  templateUrl: './retrieve-orders.component.html',
  styleUrls: ['./retrieve-orders.component.css']
})
export class RetrieveOrdersComponent implements OnInit {
  OrdersInfo:Array<Orders>=[]
  flag:boolean=false
  constructor(public ordersSer:OrdersService) { }

  // ngOnInit(): void {
  // }
  // loadData(){
  //   this.flag=true
  //   this.ordersSer.loadOrderDetails().subscribe(data=>this.OrdersInfo=data)

  msg:string=""
  ngOnInit(): void {
    this.flag=true
    this.ordersSer.loadOrderDetails().subscribe(data=>this.OrdersInfo=data)
  }
  /*loadData(){
    this.flag=true
    this.ordersSer.loadOrderDetails().subscribe(data=>this.OrdersInfo=data)
  }*/
  deleteOrders(oid:any){
    this.ordersSer.deleteOrdersInfo(oid).subscribe(result=>this.msg=result)

  }
  toggle=true;
  status='Enable';
  enableDisableRule(){
    this.toggle=!this.toggle;
    this.status=this.toggle?'Enable':'Disable';
  }
}
