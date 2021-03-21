import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Orders } from '../orders.model';
import { OrdersService } from '../orders.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-price-desc',
  templateUrl: './product-price-desc.component.html',
  styleUrls: ['./product-price-desc.component.css']
})
export class ProductPriceDescComponent implements OnInit {
  productInfo:Array<Product>=[];
  ordersInfo:Array<Orders>=[];
  flag:boolean = false;
  user:string="";
  constructor(public productSer:ProductService,public ordersSer:OrdersService,private auth:AuthService,public router:Router) { }

  ngOnInit(): void {
    this.flag=true;
    this.productSer.loadProductDetailsByDesc().subscribe(data=>this.productInfo=data);
    // this.productSer.loadProductDetails().subscribe(data=>this.productInfo=data);
    this.ordersSer.loadOrderDetails().subscribe(data1=>this.ordersInfo=data1);

    let obj = sessionStorage.getItem("cname");
    if(obj!=null){
      this.user=obj;
    }
  }
  searchText:string="";
  // public cartList:Array<Product>=[];
  
itemsCart:any=[];
addtocart(product: any,products: { quantity: number; }){
  
 
  if(product.quantity>0)
  {
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
      for(let i=0;i<this.itemsCart.length-1;i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].pid)){
          this.itemsCart[i].quantity=product.quantity;
          index=i;
          break;
        }
      }
      if(index==-1 ){
        this.itemsCart.push(product);
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
      }
      else{
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
      }
    }
    this.cartNumberFunc();
  }
  else{
    alert("Please select product quantity")
    this.router.navigate(['product/desc']);
  }
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
cartItem:number=0;
cartItemFunc(){
  if(localStorage.getItem('localCart')!=null){
    var cartCount = JSON.parse(localStorage.getItem('localCart')|| '{}');
    //console.log(cartCount); 

    this.cartItem=cartCount.length;
  }
}

logout(){
  sessionStorage.removeItem("cname");
  this.router.navigate(["login"]);
}

}

