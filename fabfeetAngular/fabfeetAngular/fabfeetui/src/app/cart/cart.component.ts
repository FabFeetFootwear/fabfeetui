import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Orders } from '../orders.model';
import { Product } from '../product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productInfo:Array<Product>=[];
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.cartDetails();
    this.loadTotal();
  }
  getCartDetails:any=[];
   cartDetails(){
     if(localStorage.getItem('localCart')){
        this.getCartDetails = JSON.parse(localStorage.getItem('localCart')||'{}');
        console.log(this.getCartDetails);
     }
   }
   increaseQuantity(pid : any,quantity :any){
     for(let i=0; i<this.getCartDetails.length; i++){
       if(this.getCartDetails[i].pid === pid){
         if(quantity!=3){
            this.getCartDetails[i].quantity = parseInt(quantity)+1;
         }
       }
     }
     localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
     this.loadTotal();
   }
   decreaseQuantity(pid : any,quantity :any){
    for(let i=0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].pid === pid){
        if(quantity!=1){
           this.getCartDetails[i].quantity = parseInt(quantity)-1;
        }
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.loadTotal();
  }
  total:number=0;
  loadTotal(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '{}');
      this.total=this.getCartDetails.reduce(function(accumulator: number,value: { price: number; quantity: number; }){
        return accumulator + (value.price * value.quantity)
      },0)
    }
  }
  // removeAll(){
  //   localStorage.removeItem('localCart');
  //   this.getCartDetails=[];
  //   this.total=0;
  //   this.cartNumber=0;
  //   this.auth.cartSubject.next(this.cartNumber);
  // }
  remove(getCart:any){
    console.log(getCart);
    if(localStorage.getItem('localCart')){
      this.getCartDetails= JSON.parse(localStorage.getItem('localCart')||'{}')
        for(let i=0;i<this.getCartDetails.length;i++){
          if(this.getCartDetails[i].pid === getCart){
            this.getCartDetails.splice(i,1);
            localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
            this.loadTotal();
            this.cartNumberFunc();
        }
      }
    }
  }
  cartNumber:number=0;
  cartNumberFunc(){
  var cartValue=JSON.parse(localStorage.getItem('localCart')|| '{}');
  this.cartNumber=cartValue.length;
  this.auth.cartSubject.next(this.cartNumber);
  //console.log(this.cartNumber);
}
}
