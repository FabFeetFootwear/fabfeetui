import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Orders } from '../orders.model';
import { OrdersService } from '../orders.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-price-asc',
  templateUrl: './product-price-asc.component.html',
  styleUrls: ['./product-price-asc.component.css']
})
export class ProductPriceAscComponent implements OnInit {
  productInfo:Array<Product>=[];
  ordersInfo:Array<Orders>=[];
  flag:boolean = false;
  constructor(public productSer:ProductService,public ordersSer:OrdersService,private auth:AuthService) { }

  ngOnInit(): void {
    this.flag=true;
    this.productSer.loadProductDetails().subscribe(data=>this.productInfo=data);
    this.ordersSer.loadOrderDetails().subscribe(data1=>this.ordersInfo=data1);
  }
  searchText:string="";
  // public cartList:Array<Product>=[];
  
itemsCart:any=[];
addtocart(product: any){
  console.log(product);
  let cartDataNull=localStorage.getItem('localCart');
  if(cartDataNull==null){
    let storeData:any =[];
    storeData.push(product);
    localStorage.setItem('localCart',JSON.stringify(storeData));
  }
  else{
    var id =product.pid;
    let index:number=-1;
    this.itemsCart=JSON.parse(localStorage.getItem('localCart')|| '{}');
    for(let i=0;i<this.itemsCart.length;i++){
      if(parseInt(id) === parseInt(this.itemsCart[i].pid)){
        this.itemsCart[i].quantity=product.quantity;
        index=i;
        break;
      }
    }
    if(index==-1){
      this.itemsCart.push(product);
      localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
    }
    else{
      localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
    }
  }
  this.cartNumberFunc();
}

inc(product: { quantity: number; }){
  if(product.quantity!=3){
    product.quantity+=1;
  }
}
dec(product: { quantity: number; }){
  if(product.quantity!=1){
    product.quantity-=1;
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

