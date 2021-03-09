import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourrierService } from '../courrier.service';

@Component({
  selector: 'app-update-courrier',
  templateUrl: './update-courrier.component.html',
  styleUrls: ['./update-courrier.component.css']
})
export class UpdateCourrierComponent implements OnInit {
  courrierInfo=new FormGroup({
    coid:new FormControl(),
    address:new FormControl(),
    deliveryDate:new FormControl(),
    price:new FormControl()
  });
  msg:string="";
  constructor(public courrierSer:CourrierService) { }

  ngOnInit(): void {
  }
  /*updateCourrierInfo(courrierInfo:any){
    this.courrierSer.updateCourrierInfo(courrierInfo).subscribe(data=>this.msg=data);
    
  }*/
  updateCourrierDetails(){
    let courrierRef=this.courrierInfo.value;
    this.courrierSer.updateCourrierInfo(courrierRef).subscribe(result=>this.msg=result);
  }

}
