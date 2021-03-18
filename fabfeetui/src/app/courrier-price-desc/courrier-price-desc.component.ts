import { Component, OnInit } from '@angular/core';
import { Courrier } from '../courrier.module';
import { CourrierService } from '../courrier.service';

@Component({
  selector: 'app-courrier-price-desc',
  templateUrl: './courrier-price-desc.component.html',
  styleUrls: ['./courrier-price-desc.component.css']
})
export class CourrierPriceDescComponent implements OnInit {
  courrierInfo:Array<Courrier>=[];
  flag:boolean=false;

  constructor(public courrierSer:CourrierService) { }

  ngOnInit(): void {
    this.flag=true;
    this.courrierSer.loadCourrierDetailsByDesc().subscribe(data=>this.courrierInfo=data);
  }
  /*loadDataDescCourrier(){
    //console.log(this.courrierInfo);
    this.flag=true;
    this.courrierSer.loadCourrierDetailsByDesc().subscribe(data=>this.courrierInfo=data);
    //console.log(data);
  }*/

}
