import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service'
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService, public store:UserService ) {
    this.auth.cartSubject.subscribe((data)=>{
      this.cartItem=data;
    })
   }
   login() {}
   logout() {
   
   }
  ngOnInit(): void {
    this.cartItemFunc();
  }
cartItem:number=0;
cartItemFunc(){
  if(localStorage.getItem('localCart')!=null){
    var cartCount = JSON.parse(localStorage.getItem('localCart')|| '{}');
    //console.log(cartCount); 

    this.cartItem=cartCount.length;
  }

}

}
