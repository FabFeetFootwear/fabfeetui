import { Component, OnInit } from '@angular/core';

import { Category } from '../category.model';
import { CategoryserviceService } from '../categoryservice.service';

import { Orders } from '../orders.model';
import { OrdersService } from '../orders.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productInfo:Array<Product>=[];
  ordersInfo:Array<Orders>=[];

  categoryInfo:Array<Category>=[];
  flag:boolean = false;

  constructor(public productSer:ProductService,public ordersSer:OrdersService,public categoryser:CategoryserviceService) { }

  // flag:boolean = false;

  // constructor(public productSer:ProductService,public ordersSer:OrdersService) { }


  ngOnInit(): void {
    this.flag=true;
    this.productSer.loadProductDetails().subscribe(data=>this.productInfo=data);
    this.ordersSer.loadOrderDetails().subscribe(data1=>this.ordersInfo=data1);

    this.categoryser.loadCategoryDetails().subscribe(data1=>this.categoryInfo=data1);
  }
searchText:string="";

  
// public cartList:Array<Product>=[];

// addtocart(cart:Product){
//   this.cartList.push(cart);
// }


}
