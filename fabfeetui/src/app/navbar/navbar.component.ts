import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders.model';
import { OrdersService } from '../orders.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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

}
