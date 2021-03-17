import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourrierService } from '../courrier.service';

@Component({
  selector: 'app-store-courrier',
  templateUrl: './store-courrier.component.html',
  styleUrls: ['./store-courrier.component.css']
})
export class StoreCourrierComponent implements OnInit {
  courrierInfo=new FormGroup({
    coid:new FormControl(),
    address:new FormControl(),
    phone:new FormControl(),
    deliveryDate:new FormControl(),
    paymentType:new FormControl(),
    cname:new FormControl(),
    price:new FormControl()
  });
  msg:string="";
  constructor(public courrierSer:CourrierService) { }

  ngOnInit(): void {
  }
  storeCourrierDetails(){
    let courrierRef=this.courrierInfo.value;
    this.courrierSer.storeCourrierInfo(courrierRef).subscribe(result=>this.msg=result);
  }


}