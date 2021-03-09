import { Component, OnInit,Input } from '@angular/core';
import { Orders } from '../orders.model';
import { Product } from '../product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input (
     
    )
   carts:Array<Product>=[];
   //carts:Array<Orders>=[]
}
