import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders.model';
import { OrdersService } from '../orders.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  productInfo:Array<Product>=[];
  ordersInfo:Array<Orders>=[];
  flag:boolean = false;
  constructor(public productSer:ProductService,public ordersSer:OrdersService) { }

  ngOnInit(): void {
    this.flag=true;
    this.productSer.loadProductDetails().subscribe(data=>this.productInfo=data);
    this.ordersSer.loadOrderDetails().subscribe(data1=>this.ordersInfo=data1);
  }
  // addToCart(name:any){
  //   console.log("Event Fired")
  //   console.log(name)
  // }
  searchText:string="";
  public cartList:Array<Product>=[];
  //public cartList1:Array<Orders>=[]
  

addtocart(cart:Product){
  this.cartList.push(cart);
}

}
