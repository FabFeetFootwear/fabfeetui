import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabfeetui';
  // CustomerDashboardComponent:any="";
  c:any="";
  constructor(public router:Router)
   {
    if (this.router.url === '/home') {
     this.c= true
       }
       else{
         this.c = true
       }
   }
}
